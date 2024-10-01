import { Dialog, Flex } from '@radix-ui/themes';
import SongContent from './SongContent';
import DialogContent from './DialogContent';
import styled from 'styled-components';

const DialogContainer = styled(Dialog.Content)`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: #f9f9f9;
  animation: slideUp 0.3s ease-out;

  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes slideDown {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(100%);
    }
  }
`;

const SongContainer = styled(Flex)`
  border-bottom: 1px solid #e5e5e5;
  padding: 10px;
  &:last-child {
    border-bottom: none;
  }
`;

const SongDialog = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <SongContainer justify={'between'} align={'center'}>
          <SongContent />
        </SongContainer>
      </Dialog.Trigger>
      <DialogContainer>
        <DialogContent />
      </DialogContainer>
    </Dialog.Root>
  );
};

export default SongDialog;
