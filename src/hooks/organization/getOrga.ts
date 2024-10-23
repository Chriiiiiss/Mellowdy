import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useUserState } from '../../stores/useUserState';

interface OrganizationResponse {
  id: number;
  name: string;
  description: string;
}

const fetchOrganization = async (token: string) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/v1/users/organizations`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch organization');
  }

  const data: OrganizationResponse[] = await response.json();
  return data;
};

export const useGetOrganization = () => {
  const queryClient = useQueryClient();
  const { token } = useUserState();

  if (!token) return;

  return useQuery(
    {
      queryKey: ['getOrganization', token],
      queryFn: () => fetchOrganization(token),
    },
    queryClient
  );
};
