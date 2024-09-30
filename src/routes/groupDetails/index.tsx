import { createFileRoute } from '@tanstack/react-router';
import { GroupDetails } from '../../pages/GroupDetails';

export const Route = createFileRoute('/groupDetails/')({
  component: GroupDetails,
});
