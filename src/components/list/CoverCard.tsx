import { Box, Text, Flex, Link, Avatar } from '@radix-ui/themes';
import styled from 'styled-components';

interface ListAddCardProps {
  title: string;
  variant: 'group' | 'playlist';
  link: string;
  cover?: string;
}

const CardLink = styled(Link)`
  display: flex;
  gap: 8px;
  flex-direction: column;
`;

export const CoverCard = ({
  title,
  variant,
  link,
  cover,
}: ListAddCardProps) => {
  return (
    <Box>
      <CardLink href={link} underline="none">
        <Avatar
          src={cover}
          size="7"
          fallback={title.slice(0, 2)}
          radius={variant === 'group' ? 'full' : 'small'}
        />
        <Flex align={'center'} justify={'center'} maxWidth={'104px'}>
          <Text as={'p'} size={'1'} color="gray" truncate>
            {title}
          </Text>
        </Flex>
      </CardLink>
    </Box>
  );
};
