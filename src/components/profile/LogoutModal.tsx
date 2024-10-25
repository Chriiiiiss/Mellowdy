import { Dialog, Flex } from '@radix-ui/themes';
import { useUserState } from '../../stores/useUserState';
import { useNavigate } from '@tanstack/react-router';
import { MellowdyButton } from '../Button';

interface ProfileDialogProps {
  open: boolean;
  onClose: () => void;
}

const LogoutModal = ({ open, onClose }: ProfileDialogProps) => {
  const userState = useUserState();
  const navigate = useNavigate();

  const handleLogout = () => {
    return () => {
      userState.logout();
      navigate({ to: '/login' });
    };
  };
  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Content>
        <Dialog.Title>Déconnection</Dialog.Title>
        <Dialog.Description>
          Êtes-vous sûr de vouloir vous déconnecter ?
        </Dialog.Description>
        <Flex justify="center" mt="4" gap={'8'} style={{ width: '100%' }}>
          <MellowdyButton onClick={handleLogout()} size="medium" label="oui" />
          <Dialog.Close>
            <MellowdyButton
              onClick={onClose}
              size="medium"
              label="non"
              variant="soft"
            />
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};
export default LogoutModal;
