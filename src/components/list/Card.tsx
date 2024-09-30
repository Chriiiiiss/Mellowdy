import styled from 'styled-components';
import { Box, Link, Inset, Flex, Text } from '@radix-ui/themes';

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
  height: auto;
  aspect-ratio: 1 / 1;
  background-color: var(--gray-5);
  border-radius: 50%;
`;

export const ClickableCard = ({
  title,
  cover,
  link,
  variant,
}: GroupCardProps) => {
  return (
    <Box maxWidth={'104px'}>
      <Link href={link} underline="none">
        <Inset clip="padding-box" side="top" pb="current">
          <StyledImg src={cover} alt={title} variant={variant} />
        </Inset>

        <Flex align={'center'} justify={'center'} gap={'2'} maxWidth={'104px'}>
          <Text as={'p'} size={'1'} truncate color="gray">
            {title}
          </Text>
        </Flex>
      </Link>
    </Box>
  );
};
