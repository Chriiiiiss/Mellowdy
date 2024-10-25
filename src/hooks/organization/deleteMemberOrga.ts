import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useUserState } from '../../stores/useUserState';
import toast from 'react-hot-toast';

// TODO: Try catch error, handle errors
const deleteMemberOrga = async (id: string, token: string) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/v1/organization/${id}/remove`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(
      errorData.message || 'Erreur lors de la suppression du membre'
    );
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
        toast.success('Membre supprimé avec succès');
        queryClient.invalidateQueries({
          queryKey: ['getAllOrganization', 'getOrganization'],
        });
      },
      onError(error) {
        toast.error(error.message);
      },
    },
    queryClient
  );
};
