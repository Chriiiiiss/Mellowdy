import React from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';
import styled from 'styled-components';
import { ChevronDownIcon, Flex } from '@radix-ui/themes';
import { ChevronUpIcon } from '@radix-ui/react-icons';

const CollapsibleRoot = styled(Collapsible.Root)`
  border: 1px solid #333;
  padding: 24px;
  border-radius: 8px;
`;

const CollapsibleContent = styled(Collapsible.Content)`
  padding-top: 16px;
  height: 225px;
  overflow: scroll;

  &[data-state='open'] {
    animation: slideDown 300ms ease-out;
  }

  &[data-state='closed'] {
    animation: slideUp 300ms ease-out;
  }

  @keyframes slideDown {
    from {
      height: 0;
    }
    to {
      height: var(--radix-collapsible-content-height);
    }
  }

  @keyframes slideUp {
    from {
      height: var(--radix-collapsible-content-height);
    }
    to {
      height: 0;
    }
  }
`;

const NotifContainer = styled(Flex)`
  background-color: #1f1f1f;
  padding: 18px;
  border-radius: 8px;
`;

const ImageStyled = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 100px;
`;

const NotificationCollapse = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <CollapsibleRoot open={open} onOpenChange={setOpen}>
      <Flex align={'center'} justify={'between'}>
        <Collapsible.Trigger asChild>
          <Flex justify={'between'} align={'center'} width={'100%'}>
            <span style={{ color: 'white' }}>Afficher les notifications</span>
            {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </Flex>
        </Collapsible.Trigger>
      </Flex>

      <CollapsibleContent>
        <Flex direction={'column'} gap={'4'}>
          <NotifContainer align={'center'} gap={'4'}>
            <ImageStyled src="https://placehold.co/60x60" />
            <span>Machin Truc à été ajouté au groupe “Les collègues”</span>
          </NotifContainer>
          <NotifContainer align={'center'} gap={'4'}>
            <ImageStyled src="https://placehold.co/60x60" />
            <span>Machin Truc écoute le morceaux “Super Musique”</span>
          </NotifContainer>
          <NotifContainer align={'center'} gap={'4'}>
            <ImageStyled src="https://placehold.co/60x60" />
            <span>Machin Truc écoute le morceaux “Super Musique”</span>
          </NotifContainer>
          <NotifContainer align={'center'} gap={'4'}>
            <ImageStyled src="https://placehold.co/60x60" />
            <span>Machin Truc écoute le morceaux “Super Musique”</span>
          </NotifContainer>
          <NotifContainer align={'center'} gap={'4'}>
            <ImageStyled src="https://placehold.co/60x60" />
            <span>Machin Truc écoute le morceaux “Super Musique”</span>
          </NotifContainer>
        </Flex>
      </CollapsibleContent>
    </CollapsibleRoot>
  );
};

export default NotificationCollapse;
