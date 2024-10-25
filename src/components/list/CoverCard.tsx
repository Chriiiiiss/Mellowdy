import { Box, Text, Flex, Avatar } from '@radix-ui/themes';
import { Link } from '@tanstack/react-router';

import styled from 'styled-components';

interface ListAddCardProps {
  title: string;
  variant: 'group' | 'playlist';
  link?: string;
  cover?: string;
  id: number;
}

const CardLink = styled(Link)`
  display: flex;
  gap: 8px;
  flex-direction: column;
  text-decoration: none;
  color: black;
`;

export const CoverCard = ({ title, variant, cover, id }: ListAddCardProps) => {
  return (
    <Box>
      <CardLink to={`/playlistDetails/${id}`}>
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
