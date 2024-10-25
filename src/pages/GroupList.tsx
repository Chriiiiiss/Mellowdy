import { Box, Flex, Grid, Heading, Section, Text } from '@radix-ui/themes';
import { MainLayout } from '../layout/MainLayout';
import { ListCard } from '../components/list/Container';
import { CoverCard } from '../components/list/CoverCard';
import { GroupSkeleton } from '../components/Skeleton';
import { useGetAllOrganization } from '../hooks/organization/getAllOrga';
import { EmptyGroupState } from '../components/homePage/EmptyGroupState';
import { CreateGroupDialog } from '../components/homePage/CreateGroupDialog';

export const GroupList = () => {
  const getOrganization = useGetAllOrganization();

  const notOwner = getOrganization.data?.filter((orga) => !orga.is_user_owner);

  console.log(notOwner, 'notOwner');

  return (
    <MainLayout>
      <Section pt={'0'} pb={'6'}>
        <Flex gap={'5'} direction={'column'}>
          <Heading>Groupes</Heading>
        </Flex>
      </Section>
      {!getOrganization.data ? (
        <EmptyGroupState />
      ) : (
        <>
          <Section pt={'0'} pb={'6'}>
            <Flex gap={'5'}>
              <ListCard label="Mes groupes">
                {getOrganization.isLoading ? (
                  <Grid gap={'3'} columns={'3'}>
                    <GroupSkeleton />
                    <GroupSkeleton />
                    <GroupSkeleton />
                  </Grid>
                ) : (
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
                    {getOrganization.data.map(
                      (group) =>
                        group.is_user_owner && (
                          <CoverCard
                            key={group.id}
                            id={group.id}
                            title={group.name}
                            cover={group.avatar_url}
                            variant="group"
                          />
                        )
                    )}

                    <CreateGroupDialog isFull />
                  </Grid>
                )}
              </ListCard>
            </Flex>
          </Section>
          <Section pt={'0'} pb={'6'}>
            <Flex gap={'5'}>
              <ListCard label="Partagés avec moi">
                {getOrganization.isLoading ? (
                  <Grid gap={'3'} columns={'3'}>
                    <GroupSkeleton />
                    <GroupSkeleton />
                    <GroupSkeleton />
                  </Grid>
                ) : (
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
                    {getOrganization.data.map(
                      (group) =>
                        !group.is_user_owner && (
                          <CoverCard
                            key={group.id}
                            id={group.id}
                            title={group.name}
                            cover={group.avatar_url}
                            link={'/'}
                            variant="group"
                          />
                        )
                    )}
                    {notOwner?.length === 0 && (
                      <Box gridColumn={'span 12'}>
                        <Text size={'1'}>
                          Vous navez aucun groupe partagé avec vous
                        </Text>
                      </Box>
                    )}
                  </Grid>
                )}
              </ListCard>
            </Flex>
          </Section>
        </>
      )}
    </MainLayout>
  );
};
