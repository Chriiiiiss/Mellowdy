import { Flex, Avatar, Heading, Grid, Text, Section } from '@radix-ui/themes';
import { MainLayout } from '../layout/MainLayout';
import ScrollableProfile from '../components/homePage/ScrollableProfile';
import { ListCard } from '../components/list/Container';
import { CoverCard } from '../components/list/CoverCard';
import { useState } from 'react';
import {
  GroupDetailsMetaSkeleton,
  GroupDetailsMetaDescSkeleton,
  PlaylistSkeleton,
} from '../components/Skeleton';
import { useGetOrganization } from '../hooks/organization/getOrganization';
import { useParams } from '@tanstack/react-router';
import Dropdown from '../components/DropdownMenu';
import { Pencil1Icon, Share1Icon, TrashIcon } from '@radix-ui/react-icons';
import { InviteFriendDialog } from '../components/group/InviteFriendDialog';
import { ImportPlaylistDialog } from '../components/group/ImportPlaylistDialog';
import { useGetPlaylistByOrga } from '../hooks/playlist/getPlayListByOrga';
import { useGetAllOrganization } from '../hooks/organization/getAllOrga';
import DeleteModal from '../components/group/DeleteModal';

export const GroupDetails = () => {
  const [isPlaylistLoading] = useState(false); // setIsPlaylistLoading quand tu as les données
  const { organizationId } = useParams({ strict: false });
  if (!organizationId) return;
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const handleEdit = () => setOpenEdit(true);
  const handleDelete = () => setOpenDelete(true);

  if (!playlistId) {
    return;
  }

  const getOrganization = useGetOrganization(playlistId);
  const organizationData = getOrganization.data?.enriched_organization;
  const getAllOrganization = useGetAllOrganization();

  const isUserOwner = getAllOrganization.data?.find(
    (orga) => orga.id === organizationData?.id
  )?.is_user_owner;

  console.log(organizationData, 'bip boop');

  const getPlaylistByOrga = useGetPlaylistByOrga(organizationId);

  const options = [
    {
      icon: <Pencil1Icon />,
      label: 'Modifier',
      onClick: handleEdit,
    },
    {
      icon: <Share1Icon />,
      label: 'Inviter des amis',
      onClick: () => setOpen(true),
    },
    ...(isUserOwner
      ? [
          {
            icon: <TrashIcon color={'red'} />,
            label: 'Supprimer',
            onClick: handleDelete,
            isRed: true,
          },
        ]
      : []),
  ];

  if (!organizationId) {
    return;
  }

  if (!organizationData) {
    return;
  }

  return (
    <MainLayout>
      <Flex direction={'column'} gap={'4'}>
        <Dropdown options={options} />
        <InviteFriendDialog
          open={open}
          setOpen={setOpen}
          organizationId={organizationData?.id}
        />
        {getOrganization.isLoading && <GroupDetailsMetaSkeleton />}
        {!getOrganization.isLoading && organizationData && (
          <Flex
            direction={'column'}
            align={'center'}
            justify={'center'}
            gap={'1'}
          >
            <Avatar
              src={
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-RWYUskdgPnmt6U2_9krSgV-Cffj38hMWRQ&s'
              }
              alt={'Avatar'}
              size={'7'}
              fallback=""
              radius="full"
            />
            <Heading as={'h2'} size={'7'}>
              {organizationData.name}
            </Heading>
          </Flex>
        )}
        {getOrganization.isLoading && <GroupDetailsMetaDescSkeleton />}

        {!getOrganization.isLoading && organizationData && (
          <Flex direction={'column'} gap={'3'}>
            <Text>{organizationData.description}</Text>
            <ScrollableProfile friends={organizationData.users} />
          </Flex>
        )}
        <Flex direction={'column'}>
          <Section pt={'0'} pb={'6'}>
            <Flex gap={'5'}>
              <ListCard label="Les playlists :">
                {isPlaylistLoading && (
                  <Grid gap={'3'} columns={'3'}>
                    <PlaylistSkeleton />
                    <PlaylistSkeleton />
                    <PlaylistSkeleton />
                  </Grid>
                )}
                {!isPlaylistLoading && (
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
                    {getPlaylistByOrga &&
                      getPlaylistByOrga.data &&
                      getPlaylistByOrga.data.map((playlist) => (
                        <CoverCard
                          id={playlist.id}
                          key={playlist.id}
                          title={playlist.name}
                          cover={playlist.cover}
                          variant="playlist"
                        />
                      ))}
                    <ImportPlaylistDialog
                      isFull
                      organizationId={organizationId}
                    />
                  </Grid>
                )}
              </ListCard>
            </Flex>
          </Section>
        </Flex>
      </Flex>
      <DeleteModal
        open={openDelete}
        onClose={() => setOpenDelete(false)}
        id={getOrganization.data?.enriched_organization.id}
      />
      <EditGroupModal
        open={openEdit}
        onClose={() => setOpenEdit(false)}
        id={getOrganization.data?.enriched_organization.id}
      />
    </MainLayout>
  );
};
