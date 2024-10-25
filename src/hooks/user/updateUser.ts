import { useMutation, useQueryClient } from '@tanstack/react-query';
import { RegisterFormData } from '../../components/register/Form';
import { useUserState } from '../../stores/useUserState';

interface UpdateUserPayload {
  formData: Partial<RegisterFormData>;
}

interface UpdateUserResponse {
  user: {
    avatar_url: null;
    birthday: null;
    created_at: null;
    email: string;
    id: number;
    last_ip: string;
    location: null;
    name: string;
    password: string;
    provider_id: number;
    provider_token: null;
  };
  jwt: string;
}

interface UpdateUserError {
  error: string;
}

// TODO: Try catch error handle errors
const updateUser = async ({ formData }: UpdateUserPayload, token: string) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/v1/user`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(formData),
  });

  const data = await response.json();

  if (response.ok) {
    return data;
  }
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  const { token } = useUserState();

  if (!token) {
    throw new Error('No token found in the user state');
  }

  return useMutation<UpdateUserResponse, UpdateUserError, UpdateUserPayload>(
    {
      mutationKey: ['updateUser'],
      mutationFn: (formData) => updateUser(formData, token),
      onError: (error) => {
        console.error('Error while updating the user :', error);
        //TODO: add toast message
      },
    },
    queryClient
  );
};
