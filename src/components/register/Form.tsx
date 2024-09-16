import * as Form from '@radix-ui/react-form';
import { Avatar, Flex, Grid } from '@radix-ui/themes';
import { useState } from 'react';
import { FormField } from './Field';
import { OnboardingButton } from '../onboarding/Button';

export const RegisterForm = () => {
  const [imageUrl, setImageUrl] = useState('');

  return (
    <Form.Root style={{ width: '200px' }}>
      <FormField
        label="Username"
        type="text"
        valueMissing="Mising username"
        typeMismatch="Please provide a valid username"
        required
      />

      <FormField
        label="URL image de profil"
        type="url"
        valueMissing="Mising image URL"
        required
        onChange={(e) => setImageUrl(e.target.value)}
      />

      <Grid gap={'6'}>
        <Flex justify={'center'}>
          <Avatar src={imageUrl} size={'8'} alt="User Avatar" fallback="U" />
        </Flex>

        <Form.Submit asChild>
          <OnboardingButton label="Créer mon compte" onClick={() => {}} />
        </Form.Submit>
      </Grid>
    </Form.Root>
  );
};
