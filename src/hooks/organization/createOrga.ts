import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useUserState } from '../../stores/useUserState';
import toast from 'react-hot-toast';

export interface CreateOrgaPayload {
  owner_id: number;
  name: string;
  description?: string;
  image_url?: string;
}

// TODO: Try catch error, handle errors
const createOrga = async (formData: CreateOrgaPayload, token: string) => {
  try {
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

    return data;
  } catch (e) {
    throw new Error(
      "Une erreur est survenue lors de la création de l'organisation"
    );
  }
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
      onError(error) {
        toast.error(error.message);
      },
    },
    queryClient
  );
};
