import { useQuery, useQueryClient } from '@tanstack/react-query';
import { OrganizationUser } from '../organization/getOrganization';
import { useUserState } from '../../stores/useUserState';

export interface searchUserByEmailResponse {
  user: OrganizationUser[];
}

const fetchUserByEmail = async (
  email: string,
  organizationId: number,
  token: string
) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/v1/user/search?email=${email}&organization_id=${organizationId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch user');
  }

  const data: searchUserByEmailResponse = await response.json();

  return data;
};

export const useSearchUserByEmail = (email: string, organizationId: number) => {
  const queryClient = useQueryClient();
  const { token } = useUserState();

  if (!token) {
    throw new Error('Token is missing');
  }

  return useQuery(
    {
      queryKey: ['searchUserByEmail', email, organizationId, token],
      queryFn: () => fetchUserByEmail(email, organizationId, token),
      retry: 0,
    },
    queryClient
  );
};
