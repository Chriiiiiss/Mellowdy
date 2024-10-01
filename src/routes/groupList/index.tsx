import { createFileRoute } from '@tanstack/react-router';
import { GroupList } from '../../pages/GroupList';

export const Route = createFileRoute('/groupList/')({
  component: GroupList,
});
