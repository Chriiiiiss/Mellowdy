import { useMutation, useQueryClient } from '@tanstack/react-query';
import { RegisterFormData } from '../../components/register/Form';
import { useUserState } from '../../stores/useUserState';
import { useNavigate } from '@tanstack/react-router';

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
  const { updateUserState } = useUserState();
  const { token } = useUserState();
  const navigate = useNavigate();

  if (!token) {
    throw new Error('No token found in the user state');
  }

  return useMutation<UpdateUserResponse, UpdateUserError, UpdateUserPayload>(
    {
      mutationKey: ['updateUser'],
      mutationFn: (formData) => updateUser(formData, token),
      onSuccess: (data) => {
        updateUserState(
          {
            username: data.user.Name,
            avatarUrl: data.user.AvatarURL,
          },
          data.jwt
        );

        navigate({ to: '/homePage' });
      },
      onError: (error) => {
        console.error('Error while updating the user :', error);
        //TODO: add toast message
      },
    },
    queryClient
  );
};
