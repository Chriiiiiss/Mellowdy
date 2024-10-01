import { Icon } from '@iconify/react/dist/iconify.js';
import { Box, Text, Flex, Link } from '@radix-ui/themes';

interface ListAddCardProps {
  title: string;
  variant: 'group' | 'playlist';
  link: string;
  cover?: string;
  add?: boolean;
}

export const CoverCard = ({
  title,
  variant,
  link,
  cover,
  add,
}: ListAddCardProps) => {
  return (
    <Box maxWidth={'104px'}>
      <Link href={link} underline="none">
        <Flex
          style={{
            objectFit: 'cover',
            width: '100%',
            borderRadius: `${variant === 'group' ? '50%' : '8px'}`,
            backgroundImage: `${add ? 'url(/images/backgrounds/AddBg.png)' : `url(${cover})`}`,
            justifyContent: 'center',
            alignItems: 'center',
            aspectRatio: '1 / 1',
          }}
        >
          {add && (
            <Icon
              icon={'ph:plus'}
              fontSize={'50px'}
              color="var(--mellowdy-white)"
            />
          )}
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
