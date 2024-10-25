import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useUserState } from '../../stores/useUserState';

// TODO: Try catch error, handle errors
const deleteOrga = async (id: string, token: string) => {
  const response = await fetch(`/v1/organization/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (response.ok) {
    return data;
  }

  return data;
};

export const useDeleteOrga = () => {
  const queryClient = useQueryClient();
  const { token } = useUserState();

  if (!token) {
    throw new Error('No token found in the user state');
  }

  return useMutation(
    {
      mutationKey: ['deleteOrga'],
      mutationFn: (id: string) => deleteOrga(id, token),
      onSuccess() {
        queryClient.invalidateQueries({
          queryKey: ['getAllOrganization', 'getOrganization'],
        });
      },
    },
    queryClient
  );
};
