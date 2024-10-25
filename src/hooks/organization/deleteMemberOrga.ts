import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useUserState } from '../../stores/useUserState';

// TODO: Try catch error, handle errors
const deleteMemberOrga = async (id: string, token: string) => {
  const response = await fetch(`/v1/organization/${id}/remove`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Error while deleting member');
  }

  return await response.json();
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
      mutationFn: (id: string) => deleteMemberOrga(id, token),
      onSuccess() {
        queryClient.invalidateQueries({
          queryKey: ['getAllOrganization', 'getOrganization'],
        });
      },
    },
    queryClient
  );
};