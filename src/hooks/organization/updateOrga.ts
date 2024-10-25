import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useUserState } from '../../stores/useUserState';

export interface UpdateOrgaPayload {
  new_name: string;
  new_description?: string;
}

// TODO: Try catch error, handle errors
const updateOrga = async (
  formData: UpdateOrgaPayload,
  id: string,
  token: string
) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/v1/organization/${id}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    }
  );

  const data = await response.json();

  if (response.ok) {
    return data;
  }

  return data;
};

export const useUpdateOrga = () => {
  const queryClient = useQueryClient();
  const { token } = useUserState();

  if (!token) {
    throw new Error('No token found in the user state');
  }

  return useMutation(
    {
      mutationKey: ['updateOrga'],
      mutationFn: ({
        formData,
        id,
      }: {
        formData: UpdateOrgaPayload;
        id: string;
      }) => updateOrga(formData, id, token),
      onSuccess() {
        queryClient.invalidateQueries({
          queryKey: ['getAllOrganization', 'getOrganization'],
        });
        queryClient.refetchQueries({
          queryKey: ['getOrganization'],
        });
      },
    },
    queryClient
  );
};
