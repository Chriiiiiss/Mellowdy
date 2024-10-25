import { Dialog, Flex } from '@radix-ui/themes';
import { MellowdyButton } from '../Button';
import { useUpdateOrga } from '../../hooks/organization/updateOrga';
import * as Form from '@radix-ui/react-form';
import { FormField } from '../Field';
import styled from 'styled-components';
import { useState } from 'react';
import toast from 'react-hot-toast';

interface ProfileDialogProps {
  id?: number;
  open: boolean;
  onClose: () => void;
}

const ModalContainer = styled(Dialog.Root)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const FormRoot = styled(Form.Root)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const EditGroupModal = ({ open, onClose, id }: ProfileDialogProps) => {
  const updateOrga = useUpdateOrga();
  const [name, setName] = useState<string>();
  const [description, setDescription] = useState<string>();

  const handleEdit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    if (!id || !name || !description) return;
    try {
      await updateOrga.mutateAsync({
        id: id.toString(),
        formData: { new_name: name, new_description: description },
      });

      onClose();
    } catch (error) {
      console.error('Error while deleting group: ', error);
      toast.error('Une erreur est survenue lors de la modification du groupe');
    }
  };
  return (
    <ModalContainer open={open} onOpenChange={onClose}>
      <Dialog.Content>
        <Dialog.Title>Modifier le groupe</Dialog.Title>
        <FormRoot onSubmit={handleEdit}>
          <FormField
            label="Name"
            name="name"
            type="text"
            valueMissing="Mising name"
            typeMismatch="Please provide a valid name"
            onChange={(e) => setName(e.target.value)}
          />
          <FormField
            label="Description"
            name="description"
            type="text"
            valueMissing="Mising description"
            typeMismatch="Please provide a valid description"
            onChange={(e) => setDescription(e.target.value)}
          />

          <Flex justify="center" mt="8" gap={'7'} style={{ width: '100%' }}>
            <Form.Submit asChild>
              <MellowdyButton size="medium" label="Modifier" />
            </Form.Submit>
            <Dialog.Close>
              <MellowdyButton
                onClick={() => onClose()}
                size="medium"
                label="Annuler"
                variant="soft"
              />
            </Dialog.Close>
          </Flex>
        </FormRoot>
      </Dialog.Content>
    </ModalContainer>
  );
};
export default EditGroupModal;
