import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useUserState } from '../../stores/useUserState';

interface OrganizationResponse {
  organizations: Organization[];
}

interface Organization {
  id: number;
  name: string;
  description: string;
  avatar_url: string;
}

const fetchOrganization = async (token: string | null) => {
  if (!token) {
    throw new Error('No token found in the user state');
  }

  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/v1/user/organizations`,
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

  console.log(data);
  return data.organizations;
};

export const useGetAllOrganization = () => {
  const queryClient = useQueryClient();
  const { token } = useUserState();

  return useQuery(
    {
      queryKey: ['getOrganization', token],
      queryFn: () => fetchOrganization(token),
      enabled: !!token,
    },
    queryClient
  );
};
