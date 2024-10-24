import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useUserState } from '../../stores/useUserState';

export interface OrganizationUser {
  id: number;
  name: string;
  avatar_url: string;
}

export interface OrganizationResponse {
  id: number;
  name: string;
  description: string;
  avatar_url: string;
  owner_id: number;
  users: OrganizationUser[];
  created_at: string;
}

const fetchOrganization = async (
  organizationId: string,
  token: string | null
) => {
  if (!token) {
    throw new Error('No token found in the user state');
  }

  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/v1/organization/${organizationId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch organization');
  }

  const data: OrganizationResponse = await response.json();

  return data;
};

export const useGetOrganization = (organizationId: string) => {
  const queryClient = useQueryClient();
  const { token } = useUserState();

  return useQuery(
    {
      queryKey: ['getOrganization', organizationId, token],
      queryFn: () => fetchOrganization(organizationId, token),
      enabled: !!token,
    },
    queryClient
  );
};
