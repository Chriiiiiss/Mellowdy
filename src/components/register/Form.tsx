import * as Form from '@radix-ui/react-form';
import { Avatar, Flex, Grid } from '@radix-ui/themes';
import { FormEvent, useState } from 'react';
import { FormField } from '../Field';
import { useUserState } from '../../stores/useUserState';
import { useUpdateUser } from '../../hooks/user/updateUser';
import { MellowdyButton } from '../Button';
import { useNavigate } from '@tanstack/react-router';
import styled from 'styled-components';

export interface RegisterFormData {
  username: string;
  imageUrl: string;
}

interface RegisterFormProps {
  setModalOpen?: (open: boolean) => void;
}

const FormRoot = styled(Form.Root)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 400px;
`;

export const RegisterForm = ({ setModalOpen }: RegisterFormProps) => {
  const { user, updateUserState } = useUserState();
  const [imageUrl, setImageUrl] = useState('');
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const updateUser = useUpdateUser();
  const navigate = useNavigate();
  const isProfilePage = location.pathname === '/profile';

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const url = new URL(e.target.value);
      setImageUrl(url.href);
    } catch (error) {
      // Dunnot do anything if the URL is invalid
      // Can send a TOAST message to the user ? maybe
      // TODO: Send a toast message to the user
      console.error('Invalid URL: ', error);
      return;
    }
  };

  const handleRegisterForm = (e: FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // Sanitize the form data and get a clean object with only the fields that are not empty
    const sanitizedData = Object.fromEntries(
      Array.from(formData.entries())
        .filter(
          ([, value]) =>
            value !== null &&
            value !== undefined &&
            value.toString().trim() !== ''
        )
        .map(([key, value]) => [key, value.toString()])
    ) as Partial<RegisterFormData>;

    // Mutate the user state with the new data
    updateUser.mutate(
      { formData: sanitizedData },
      {
        onSuccess(data) {
          updateUserState(
            {
              username: data.user.name,
              avatarUrl: data.user.avatar_url,
            },
            data.jwt
          );

          // Grace au props setModalOPen est-ce que tu as toujours besoins de isProfilePage ?

          isProfilePage && setModalOpen
            ? setModalOpen(false)
            : setIsLoading(false),
            navigate({ to: '/homePage' });
        },
      }
    );
  };

  return (
    <FormRoot onSubmit={handleRegisterForm}>
      <FormField
        label="Username"
        name="name"
        type="text"
        valueMissing="Mising username"
        typeMismatch="Please provide a valid username"
        placeholder={user?.username || 'Username'}
        required
        onChange={(e) => setUsername(e.target.value)}
      />

      <FormField
        label="URL image de profil"
        name="avatar_url"
        type="url"
        valueMissing="Mising image URL"
        onChange={handleImageChange}
      />

      <Grid gap={'6'}>
        <Flex justify={'center'}>
          <Avatar
            src={imageUrl}
            size={'8'}
            alt="User Avatar"
            fallback={username.slice(0, 2).toUpperCase()}
          />
        </Flex>
        <Form.Submit asChild>
          <MellowdyButton
            label={
              isProfilePage ? 'Modifier mes informations' : 'Créer mon compte'
            }
            onClick={() => {}}
            isLoading={isLoading}
          />
        </Form.Submit>
      </Grid>
    </FormRoot>
  );
};
