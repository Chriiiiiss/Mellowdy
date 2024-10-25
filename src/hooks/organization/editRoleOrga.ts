import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useUserState } from '../../stores/useUserState';

// TODO: Try catch error, handle errors
const editRoleOrga = async (
  id: string,
  userId: number,
  role: string,
  token: string
) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/v1/organization/${id}/add-admin`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        userID: userId,
        role: role, // Le rôle est dynamique ici
      }),
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Error while editing role');
  }

  return await response.json();
};

export const useEditRoleOrga = () => {
  const queryClient = useQueryClient();
  const { token } = useUserState();

  if (!token) {
    throw new Error('No token found in the user state');
  }

  return useMutation(
    {
      mutationKey: ['editRoleOrga'],
      mutationFn: ({
        id,
        userId,
        role,
      }: {
        id: string;
        userId: number;
        role: string;
      }) => editRoleOrga(id, userId, role, token),
      onSuccess() {
        queryClient.invalidateQueries({
          queryKey: ['getAllOrganization', 'getOrganization'],
        });
      },
    },
    queryClient
  );
};
