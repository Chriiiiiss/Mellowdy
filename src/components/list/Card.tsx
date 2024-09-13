import { Box, Flex, Inset, Link, Text } from '@radix-ui/themes';
import styled from 'styled-components';

interface GroupCardProps {
  title: string;
  cover: string;
  link: string;
  variant: 'group' | 'playlist';
}

const StyledImg = styled.img<{ variant: 'group' | 'playlist' }>`
  display: block;
  object-fit: cover;
  width: 100%;
  height: 101px;
  background-color: var(--gray-5);
  border-radius: ${(props) => (props.variant === 'group' ? '100%' : '8px')};
`;
export const GroupCard = ({ title, cover, link, variant }: GroupCardProps) => {
  return (
    <Box maxWidth={'104px'}>
      <Link href={link} underline="none">
        <Inset clip="padding-box" side="top" pb="current">
          <StyledImg src={cover} alt={title} variant={variant} />
        </Inset>

        <Flex align={'center'} justify={'center'} gap={'2'} maxWidth={'104px'}>
          <Text as={'p'} size={'1'} truncate>
            {title}
          </Text>
        </Flex>
      </Link>
    </Box>
  );
};
