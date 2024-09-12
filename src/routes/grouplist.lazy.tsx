import { createLazyFileRoute } from '@tanstack/react-router';
import { GroupList } from '../pages/GroupList';

export const Route = createLazyFileRoute('/grouplist')({
  component: GroupList,
});
