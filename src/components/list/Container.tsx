import { Container, Flex, Heading } from '@radix-ui/themes';

interface ListCardProps {
  children?: React.ReactNode;
  label: string;
}

export const ListCard = ({ children, label }: ListCardProps) => {
  return (
    <Flex gap={'5'} direction={'column'}>
      <Heading as="h3" size={'4'}>
        {label}
      </Heading>
      <Container>{children}</Container>
    </Flex>
  );
};
