import { Flex, Grid, Heading, Section } from '@radix-ui/themes';
import { MainLayout } from '../layout/MainLayout';
import { ListCard } from '../components/list/Container';
import { CoverCard } from '../components/list/CoverCard';

const GroupsList = [
  {
    title: 'Summer 2k24',
    cover: 'https://picsum.photos/25/25',
    link: '/',
  },
  {
    title: 'Délire',
    cover: 'https://picsum.photos/200/150',
    link: '/',
  },
  {
    title: "La plus longue playlist de l'histoire",
    cover: 'https://picsum.photos/139/100',
    link: '/',
  },
  {
    title: 'Chill and relax',
    cover: 'https://picsum.photos/55/56',
    link: '/',
  },
  {
    title: 'Chill and relax',
    cover: 'https://picsum.photos/55/57',
    link: '/',
  },
  {
    title: 'Chill and relax',
    cover: 'https://picsum.photos/55/58',
    link: '/',
  },
  {
    title: 'Chill and relax',
    cover: 'https://picsum.photos/55/59',
    link: '/',
  },
  {
    title: 'Chill and relax',
    cover: 'https://picsum.photos/55/60',
    link: '/',
  },
  {
    title: 'Chill and relax',
    cover: 'https://picsum.photos/55/61',
    link: '/',
  },
  {
    title: 'Chill and relax',
    cover: 'https://picsum.photos/55/62',
    link: '/',
  },
  {
    title: 'Chill and relax',
    cover: 'https://picsum.photos/55/63',
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
            <Grid
              gap={'3'}
              columns={{
                initial: '3',
                xs: '5',
                sm: '7',
                md: '9',
                lg: '10',
                xl: '12',
              }}
            >
              {GroupsList.map((group) => (
                <CoverCard
                  key={group.title}
                  title={group.title}
                  cover={group.cover}
                  link={group.link}
                  variant="group"
                />
              ))}
              <CoverCard title="Créer un groupe" variant="group" link="/" add />
            </Grid>
          </ListCard>
        </Flex>
      </Section>
      <Section pt={'0'} pb={'6'}>
        <Flex gap={'5'}>
          <ListCard label="Partagés avec moi">
            <Grid
              gap={'3'}
              columns={{
                initial: '3',
                xs: '5',
                sm: '6',
                md: '9',
                lg: '10',
                xl: '12',
              }}
            >
              {GroupsList.map((group) => (
                <CoverCard
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
