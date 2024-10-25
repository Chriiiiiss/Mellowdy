import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useUserState } from '../../stores/useUserState';

interface AddUserToOrgPayload {
  user_id: number;
  role: string;
  orgId: number;
}

interface AddUserToOrgResponse {
  message: string;
}

interface AddUserToOrgError {
  error: string;
}

const addUserToOrg = async (token: string, payload: AddUserToOrgPayload) => {
  try {
    const { orgId, ...truePayload } = payload;
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/v1/organization/${orgId}/add`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(truePayload),
      }
    );

    return response.json();
  } catch (e) {
    throw new Error(
      "Une erreur est survenue lors de l'ajout de l'utilisateur à l'organisation"
    );
  }
};

export const useAddUserToOrg = () => {
  const { token } = useUserState();
  const query = useQueryClient();

  if (!token) {
    throw new Error('User is not authenticated');
  }

  return useMutation<
    AddUserToOrgResponse,
    AddUserToOrgError,
    AddUserToOrgPayload
  >({
    mutationFn: (payload: AddUserToOrgPayload) => addUserToOrg(token, payload),
    mutationKey: ['addUserToOrg'],
    onSuccess: () => {
      query.invalidateQueries({
        queryKey: ['getOrganization'],
      });
    },
    onError: (error) => {
      console.error(error);
    },
  });
};
