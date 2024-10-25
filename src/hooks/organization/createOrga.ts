import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useUserState } from '../../stores/useUserState';

export interface CreateOrgaPayload {
  owner_id: number;
  name: string;
  description?: string;
  image_url?: string;
}

// TODO: Try catch error, handle errors
const createOrga = async (formData: CreateOrgaPayload, token: string) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/v1/organization`,
    {
      method: 'POST',
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

export const useCreateOrga = () => {
  const queryClient = useQueryClient();
  const { token } = useUserState();

  if (!token) {
    throw new Error('No token found in the user state');
  }

  return useMutation(
    {
      mutationKey: ['createOrga'],
      mutationFn: (formData: CreateOrgaPayload) => createOrga(formData, token),
      onSuccess() {
        queryClient.invalidateQueries({
          queryKey: ['getAllOrganization'],
        });
      },
    },
    queryClient
  );
};
