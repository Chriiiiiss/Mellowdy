import * as Form from '@radix-ui/react-form';
import { useNavigate } from '@tanstack/react-router';
import { Avatar, Flex } from '@radix-ui/themes';
import { useState } from 'react';
import { FormField } from '../Field';
import { TextArea } from '../TextArea';
import { MellowdyButton } from '../Button';

export const GroupCreateForm = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [groupName, setGroupName] = useState('');
  const navigate = useNavigate();
  return (
    <Form.Root
      style={{ width: '250px' }}
      onSubmit={() => {
        navigate({ to: '/groupDetails' });
      }}
    >
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
        type="text"
        onChange={(e) => setGroupName(e.target.value)}
        valueMissing="Missing group name"
        placeholder="My new group"
        required
      />
      <FormField
        label={'URL icône du groupe'}
        type="url"
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <TextArea
        label={'Description du groupe'}
        valueMissing="Missing group desc"
        maxLength={600}
      />
      <Flex justify={'center'}>
        <Form.Submit asChild>
          <MellowdyButton label="Créer le groupe" onClick={() => {}} />
        </Form.Submit>
      </Flex>
    </Form.Root>
  );
};
