import { Avatar, Flex, Grid, Text } from '@radix-ui/themes';
import { MainLayout } from '../layout/MainLayout';
import { ListCard } from '../components/list/Container';
import { CoverCard } from '../components/list/CoverCard';
import { useUserState } from '../stores/useUserState';
import ProfileAction from '../components/profile/ProfileAction';
import { useGetAllOrganization } from '../hooks/organization/getAllOrga';
import { GroupSkeleton } from '../components/Skeleton';
import { EmptyGroupState } from '../components/homePage/EmptyGroupState';
import { Link } from '@tanstack/react-router';

export const ProfilePage = () => {
  const userState = useUserState();
  const getOrganization = useGetAllOrganization();

  if (!userState.user || !userState.user.username) {
    return null;
  }
  return (
    <MainLayout>
      <ProfileAction />
      <Flex align="center" direction="column" gap="4">
        <Avatar
          src={userState.user.avatarUrl || ''}
          fallback={userState.user.username.slice(0, 2).toUpperCase()}
          radius="full"
          size="7"
        />
        <Text>{userState.user?.username}</Text>
      </Flex>
      <Flex direction="column" gap="8" mt="4">
        <Flex gap={'5'}>
          <ListCard label="Groupes">
            {getOrganization.isLoading ? (
              <Grid gap={'3'} columns={'3'}>
                <GroupSkeleton />
                <GroupSkeleton />
                <GroupSkeleton />
              </Grid>
            ) : !getOrganization.data ? (
              <EmptyGroupState />
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
                {getOrganization.data.map((group) => (
                  <Link
                    style={{
                      textDecoration: 'none',
                      color: 'black',
                    }}
                    to={`/groupDetails/${group.id}`}
                    key={group.id}
                  >
                    <CoverCard
                      key={group.id}
                      id={group.id}
                      title={group.name}
                      cover={group.avatar_url}
                      link={'/'}
                      variant="group"
                    />
                  </Link>
                ))}
              </Grid>
            )}
          </ListCard>
        </Flex>
        <Flex gap={'5'}>
          <ListCard label="">
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
            ></Grid>
          </ListCard>
        </Flex>
      </Flex>
    </MainLayout>
  );
};
