import { Icon } from '@iconify/react/dist/iconify.js';
import { Box, Text, Flex, Link } from '@radix-ui/themes';

interface ListAddCardProps {
  title: string;
  variant: 'group' | 'playlist';
}

export const ListAddCard = ({ title, variant }: ListAddCardProps) => {
  return (
    <Box maxWidth={'104px'}>
      <Link href={'/'} underline="none">
        <Flex
          style={{
            objectFit: 'cover',
            width: '100%',
            borderRadius: `${variant === 'group' ? '50%' : '8px'}`,
            backgroundImage: `url(/images/backgrounds/AddBg.png)`,
            justifyContent: 'center',
            alignItems: 'center',
            aspectRatio: '1 / 1',
          }}
        >
          <Icon
            icon={'ph:plus'}
            fontSize={'50px'}
            color="var(--mellowdy-white)"
          />
        </Flex>
        <Flex align={'center'} justify={'center'} gap={'2'} maxWidth={'104px'}>
          <Text as={'p'} size={'1'} color="gray" truncate>
            {title}
          </Text>
        </Flex>
      </Link>
    </Box>
  );
};
