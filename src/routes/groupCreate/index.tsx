import { createFileRoute } from '@tanstack/react-router';
import { GroupCreate } from '../../pages/GroupCreate';

export const Route = createFileRoute('/groupCreate/')({
  component: GroupCreate,
});
