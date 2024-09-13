import { Flex, Grid, Heading, Section } from '@radix-ui/themes';
import { MainLayout } from '../layout/MainLayout';
import { ListCard } from '../components/list/Container';
import { GroupCard } from '../components/list/Card';
import { ListAddCard } from '../components/list/Add';

const GroupsList = [
  {
    title: 'test',
    cover: '/images/backgrounds/AddBg.png',
    link: '/',
  },
  {
    title: 'test',
    cover: '/images/backgrounds/AddBg.png',
    link: '/',
  },
  {
    title: 'test',
    cover: '/images/backgrounds/AddBg.png',
    link: '/',
  },
  {
    title: 'test',
    cover: '/images/backgrounds/AddBg.png',
    link: '/',
  },
];

export const GroupList = () => {
  return (
    <MainLayout>
      <Section pt={'0'} pb={'6'}>
        <Flex gap={'5'} direction={'column'}>
          <Heading>Groupes</Heading>
        </Flex>
      </Section>
      <Section pt={'0'} pb={'6'}>
        <Flex gap={'5'}>
          <ListCard label="Mes groupes">
            <Grid gap={'3'} columns={'3'}>
              {GroupsList.map((group) => (
                <GroupCard
                  key={group.title}
                  title={group.title}
                  cover={group.cover}
                  link={group.link}
                  variant="group"
                />
              ))}
              <ListAddCard title="Créer un groupe" variant="group" />
            </Grid>
          </ListCard>
        </Flex>
      </Section>
      <Section pt={'0'} pb={'6'}>
        <Flex gap={'5'}>
          <ListCard label="Partagés avec moi">
            <Grid gap={'3'} columns={'3'}>
              {GroupsList.map((group) => (
                <GroupCard
                  key={group.title}
                  title={group.title}
                  cover={group.cover}
                  link={group.link}
                  variant="group"
                />
              ))}
            </Grid>
          </ListCard>
        </Flex>
      </Section>
    </MainLayout>
  );
};
