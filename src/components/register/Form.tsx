import * as Form from '@radix-ui/react-form';
import { Avatar, Flex, Grid } from '@radix-ui/themes';
import { FormEvent, useState } from 'react';
import { FormField } from './Field';

import { useUserState } from '../../stores/useUserState';
import { useUpdateUser } from '../../hooks/user/updateUser';
import { MellowdyButton } from '../Button';

export interface RegisterFormData {
  username: string;
  imageUrl: string;
}

export const RegisterForm = () => {
  const { user } = useUserState();
  const [imageUrl, setImageUrl] = useState('');
  const [username, setUsername] = useState('');
  const updateUser = useUpdateUser();

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
    updateUser.mutate({ formData: sanitizedData });
  };

  return (
    <Form.Root style={{ width: '200px' }} onSubmit={handleRegisterForm}>
      <FormField
        label="Username"
        name="name"
        type="text"
        valueMissing="Mising username"
        typeMismatch="Please provide a valid username"
        required
        onChange={(e) => setUsername(e.target.value)}
        placeholder={user ? user.username : 'Username'}
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
          <MellowdyButton label="Créer mon compte" onClick={() => {}} />
        </Form.Submit>
      </Grid>
    </Form.Root>
  );
};
