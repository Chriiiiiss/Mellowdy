import { Avatar, Dialog, Flex, IconButton, Text } from '@radix-ui/themes';
import { useDeleteOrga } from '../../hooks/organization/deleteOrga';
import { OrganizationUser } from '../../hooks/organization/getOrganization';
import { StarFilledIcon, StarIcon, TrashIcon } from '@radix-ui/react-icons';
import { useEditRoleOrga } from '../../hooks/organization/editRoleOrga';

interface ProfileDialogProps {
  id?: number;
  open: boolean;
  onClose: () => void;
  member: OrganizationUser[];
  owner: number[];
}
const EditMemberModal = ({
  open,
  onClose,
  id,
  member,
  owner,
}: ProfileDialogProps) => {
  const deleteOrga = useDeleteOrga();
  const editRoleOrga = useEditRoleOrga();

  const handleDeleteMember = async (memberId: number) => {
    if (!id) return;
    try {
      await deleteOrga.mutateAsync(memberId.toString());
      onClose();
    } catch (error) {
      console.error('Error while deleting member: ', error);
    }
  };

  const handlePromoteToAdmin = async (memberId: number) => {
    if (!id) return;
    try {
      await editRoleOrga.mutateAsync({
        id: id.toString(),
        userId: memberId,
        role: 'owner',
      });
      onClose();
    } catch (error) {
      console.error('Error while promoting member: ', error);
    }
  };

  const handleDemoteToUser = async (memberId: number) => {
    if (!id) return;
    try {
      await editRoleOrga.mutateAsync({
        id: id.toString(),
        userId: memberId,
        role: 'user',
      });
      onClose();
    } catch (error) {
      console.error('Error while demoting member: ', error);
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Content>
        <Dialog.Title>Organisation des membres</Dialog.Title>
        <Dialog.Description>
          Comment souhaitez-vous gérer les membres de votre organisation ?
        </Dialog.Description>
        <Flex
          align={'center'}
          justify={'center'}
          mt={'4'}
          direction={'column'}
          gap={'5'}
        >
          {member.map((member) => (
            <Flex
              key={member.id}
              align="center"
              gap="4"
              justify={'between'}
              maxWidth={'350px'}
              width={'100%'}
            >
              <Avatar
                src={member.avatar_url}
                fallback={member.name.slice(0, 2).toUpperCase()}
              />
              <Flex gap={'1'} align={'center'}>
                <Text size="3">{member.name}</Text>
                {owner.includes(member.id) && (
                  <Text color="gray" size="2">
                    (Admin)
                  </Text>
                )}
              </Flex>

              <Text size="2">{member.email}</Text>
              <Flex gap="2">
                {owner.includes(member.id) ? (
                  <IconButton onClick={() => handleDemoteToUser(member.id)}>
                    <StarIcon />
                  </IconButton>
                ) : (
                  <IconButton onClick={() => handlePromoteToAdmin(member.id)}>
                    <StarFilledIcon />
                  </IconButton>
                )}

                {!owner.includes(member.id) && (
                  <IconButton
                    color="red"
                    onClick={() => handleDeleteMember(member.id)}
                  >
                    <TrashIcon />
                  </IconButton>
                )}
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default EditMemberModal;
