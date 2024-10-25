import { useMutation, useQueryClient } from '@tanstack/react-query';
import { RegisterFormData } from '../../components/register/Form';
import { useUserState } from '../../stores/useUserState';

interface UpdateUserPayload {
  formData: Partial<RegisterFormData>;
}

interface UpdateUserResponse {
  user: {
    AvatarURL: null;
    Birthday: null;
    CreatedAt: null;
    Email: string;
    ID: number;
    LastIP: string;
    Location: null;
    Name: string;
    Password: string;
    ProviderID: number;
    ProviderToken: null;
  };
  jwt: string;
}

interface UpdateUserError {
  error: string;
}

// TODO: Try catch error handle errors
const updateUser = async ({ formData }: UpdateUserPayload, token: string) => {
  const response = await fetch('/v1/user', {
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
