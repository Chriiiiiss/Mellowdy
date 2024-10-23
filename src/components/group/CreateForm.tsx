import * as Form from '@radix-ui/react-form';
import { Avatar, Flex } from '@radix-ui/themes';
import { FormEvent, useState } from 'react';
import { FormField } from '../Field';
import { TextArea } from '../TextArea';
import { MellowdyButton } from '../Button';
import {
  CreateOrgaPayload,
  useCreateOrga,
} from '../../hooks/organization/createOrga';
import { useUserState } from '../../stores/useUserState';
import { jwtDecode } from 'jwt-decode';
import { JwtPayload } from '../../types/auth';

export interface CreateGroupFormData {
  name: string;
  description: string;
  image_url: string;
}

interface GroupCreateFormProps {
  setOpenDialog: (open: boolean) => void;
}

export const GroupCreateForm = ({ setOpenDialog }: GroupCreateFormProps) => {
  const [imageUrl, setImageUrl] = useState('');
  const [groupName, setGroupName] = useState('');
  const createOrganization = useCreateOrga();
  const { token } = useUserState();

  if (!token) return;

  const decodedToken = jwtDecode<JwtPayload>(token);

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

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    const unSanitizedformData = new FormData(e.currentTarget);

    const sanitizedData = Object.fromEntries(
      Array.from(unSanitizedformData.entries())
        .filter(
          ([, value]) =>
            value !== null &&
            value !== undefined &&
            value.toString().trim() !== ''
        )
        .map(([key, value]) => [key, value.toString()])
    ) as Partial<CreateGroupFormData>;

    if (!sanitizedData.name) {
      console.error('Missing group name');
      return;
    }

    const mutationPayload: CreateOrgaPayload = {
      name: sanitizedData.name,
      description: sanitizedData.description,
      image_url: sanitizedData.image_url,
      owner_id: decodedToken.id,
    };

    createOrganization.mutate(mutationPayload, {
      onSuccess: () => {
        // TODO: Everything
        // Should invalidate query here to refresh the data
        // Should invalide user organization query
        // Should toast user
        setOpenDialog(false);
      },
    });
    e.preventDefault();
  };

  return (
    <Form.Root style={{ width: '250px' }} onSubmit={handleFormSubmit}>
      <Flex justify={'center'} style={{ marginBottom: '15px' }}>
        <Avatar
          src={imageUrl}
          size={'8'}
          alt="User Avatar"
          fallback={groupName.slice(0, 5).toUpperCase()}
          style={{ borderRadius: '50%' }}
        />
      </Flex>
      <FormField
        label={'Nom du groupe'}
        name="name"
        type="text"
        onChange={(e) => setGroupName(e.target.value)}
        valueMissing="Nom du groupe manquant"
        placeholder="Mon nouveau groupe"
        required
      />
      <FormField
        label={'URL icône du groupe'}
        name="avatar_url"
        type="url"
        onChange={handleImageChange}
        placeholder="https://example.com/icon.png"
      />
      <TextArea label={'Description du groupe'} maxLength={600} />
      <Flex justify={'center'} gapX={'2'}>
        <MellowdyButton
          label="Annuler"
          onClick={() => {
            setOpenDialog(false);
          }}
          variant={'secondary'}
          size="medium"
        />
        <Form.Submit asChild>
          <MellowdyButton
            label="Créer le groupe"
            onClick={() => {}}
            isLoading={isLoading}
            size="medium"
          />
        </Form.Submit>
      </Flex>
    </Form.Root>
  );
};
