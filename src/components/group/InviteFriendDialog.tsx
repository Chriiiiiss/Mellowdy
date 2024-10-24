import styled from 'styled-components';
import { useState } from 'react';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { OrganizationUser } from '../../hooks/organization/getOrganization';
import { Container, Dialog, TextField } from '@radix-ui/themes';
import { useSearchUserByEmail } from '../../hooks/user/getUserByEmail';
import { useDebounce } from '@uidotdev/usehooks';
import { useAddUserToOrg } from '../../hooks/organization/addUserToOrg';

interface InviteFriendDialogProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  organizationId: number;
}

const DialogContent = styled(Dialog.Content)`
  width: 400px;
  max-width: 90vw;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
`;

const DropdownTextFieldContainer = styled(Container)`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  z-index: 10;
`;

const UserItem = styled.div`
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const ConfirmButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

export const InviteFriendDialog = ({
  open,
  setOpen,
  organizationId,
}: InviteFriendDialogProps) => {
  const [email, setEmail] = useState('');
  const debouncedEmail = useDebounce(email, 300);
  const searchUserByEmail = useSearchUserByEmail(
    debouncedEmail,
    organizationId
  ).data;
  const [selectedUser, setSelectedUser] = useState<
    OrganizationUser | undefined
  >();
  const [dropdownVisible, setDropdownVisible] = useState(true);
  const addUserToOrg = useAddUserToOrg();

  const handleUserClick = (user: OrganizationUser) => {
    setSelectedUser(user);
    setDropdownVisible(false);
  };

  const handleSubmit = (selectedUser: OrganizationUser | undefined) => {
    console.log('selectedUser', selectedUser);
    if (!selectedUser) {
      return;
    }

    addUserToOrg.mutate(
      {
        user_id: selectedUser.id,
        role: 'member',
        orgId: organizationId,
      },
      {
        onSuccess: () => {
          setOpen(false);
        },
      }
    );
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <DialogContent>
        <Dialog.Title>Inviter des amis</Dialog.Title>
        <Dialog.Description>
          <TextField.Root
            value={email}
            onChange={(e) => {
              setEmail(e.currentTarget.value);
              setDropdownVisible(true);
            }}
            placeholder="Rechercher un utilisateur"
            style={{ position: 'relative' }}
          >
            <TextField.Slot>
              <MagnifyingGlassIcon height="16" width="16" />
            </TextField.Slot>
            {dropdownVisible &&
              searchUserByEmail?.user &&
              searchUserByEmail?.user.length > 0 && (
                <DropdownTextFieldContainer>
                  {searchUserByEmail.user.map((user: OrganizationUser) => (
                    <UserItem
                      key={user.id}
                      onClick={() => handleUserClick(user)}
                    >
                      {user.name} ({user.email})
                    </UserItem>
                  ))}
                </DropdownTextFieldContainer>
              )}
          </TextField.Root>
          {selectedUser && (
            <div style={{ marginTop: '10px' }}>
              <strong>Utilisateur sélectionné:</strong> {selectedUser.name} (
              {selectedUser.email})
            </div>
          )}
        </Dialog.Description>
        <ConfirmButton
          disabled={!selectedUser}
          onClick={() => handleSubmit(selectedUser)}
        >
          Confirmer
        </ConfirmButton>
      </DialogContent>
    </Dialog.Root>
  );
};
