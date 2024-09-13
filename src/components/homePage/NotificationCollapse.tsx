import React from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';
import styled from 'styled-components';
import { Avatar, ChevronDownIcon, Flex, Text } from '@radix-ui/themes';
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
  background-color: rgba(108, 107, 107, 0.1);
  padding: 18px;
  border-radius: 8px;
`;

const NotificationCollapse = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <CollapsibleRoot open={open} onOpenChange={setOpen}>
      <Flex align="center" justify="between">
        <Collapsible.Trigger asChild>
          <Flex justify="between" align="center" width="100%">
            <Text>Afficher les notifications</Text>
            {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </Flex>
        </Collapsible.Trigger>
      </Flex>

      <CollapsibleContent>
        <Flex direction="column" gap="4">
          <NotifContainer align="center" gap="4">
            <Avatar
              src="https://placehold.co/60x60"
              fallback="A"
              radius="full"
              size="3"
            />
            <Text>Machin Truc à été ajouté au groupe “Les collègues”</Text>
          </NotifContainer>
          <NotifContainer align="center" gap="4">
            <Avatar
              src="https://placehold.co/60x60"
              fallback="A"
              radius="full"
              size="3"
            />
            <Text>Machin Truc écoute le morceaux “Super Musique”</Text>
          </NotifContainer>
          <NotifContainer align="center" gap="4">
            <Avatar
              src="https://placehold.co/60x60"
              fallback="A"
              radius="full"
              size="3"
            />
            <Text>Machin Truc écoute le morceaux “Super Musique”</Text>
          </NotifContainer>
          <NotifContainer align="center" gap="4">
            <Avatar
              src="https://placehold.co/60x60"
              fallback="A"
              radius="full"
              size="3"
            />
            <Text>Machin Truc écoute le morceaux “Super Musique”</Text>
          </NotifContainer>
          <NotifContainer align="center" gap="4">
            <Avatar
              src="https://placehold.co/60x60"
              fallback="A"
              radius="full"
              size="3"
            />
            <Text>Machin Truc écoute le morceaux “Super Musique”</Text>
          </NotifContainer>
        </Flex>
      </CollapsibleContent>
    </CollapsibleRoot>
  );
};

export default NotificationCollapse;
