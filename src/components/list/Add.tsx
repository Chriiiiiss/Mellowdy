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
            height: '101px',
            borderRadius: `${variant === 'group' ? '100%' : '8px'}`,
            backgroundImage: `url(/images/backgrounds/AddBg.png)`,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Icon
            icon={'ph:plus'}
            fontSize={'50px'}
            color="var(--mellowdy-white)"
          />
        </Flex>
        <Flex align={'center'} justify={'center'} gap={'2'} maxWidth={'104px'}>
          <Text as={'p'} size={'1'} truncate>
            {title}
          </Text>
        </Flex>
      </Link>
    </Box>
  );
};
