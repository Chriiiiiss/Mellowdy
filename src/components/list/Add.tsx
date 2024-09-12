import { Icon } from '@iconify/react/dist/iconify.js';
import { Box, Text, Flex } from '@radix-ui/themes';

interface ListAddCardProps {
  title: string;
}

export const ListAddCard = ({ title }: ListAddCardProps) => {
  return (
    <Box maxWidth={'104px'}>
      <a href={'/'} style={{ textDecoration: 'none' }}>
        <Box
          style={{
            display: 'flex',
            objectFit: 'cover',
            width: '100%',
            height: '101px',
            borderRadius: '100%',
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
        </Box>
        <Flex align={'center'} justify={'center'} gap={'2'} maxWidth={'104px'}>
          <Text as={'p'} size={'1'} truncate>
            {title}
          </Text>
        </Flex>
      </a>
    </Box>
  );
};
