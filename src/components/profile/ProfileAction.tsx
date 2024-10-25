import { useState } from 'react';
import EditModal from './EditModal';
import ProfileDropdown from './ProfileDropdown';
import { Flex } from '@radix-ui/themes';
import LogoutModal from './LogoutModal';

const ProfileAction = () => {
  const [openEdit, setOpenEdit] = useState(false);
  const [openLogout, setOpenLogout] = useState(false);

  const handleEdit = () => setOpenEdit(true);
  const handleLogout = () => setOpenLogout(true);

  return (
    <>
      <Flex width="100%" justify={'end'}>
        <ProfileDropdown onEdit={handleEdit} onLogout={handleLogout} />
      </Flex>
      <EditModal open={openEdit} onClose={() => setOpenEdit(false)} />
      <LogoutModal open={openLogout} onClose={() => setOpenLogout(false)} />
    </>
  );
};

export default ProfileAction;
