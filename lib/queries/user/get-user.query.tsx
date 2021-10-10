import { useQuery } from 'react-query';
import * as React from 'react';

const getUser = (id: string): any => {
	return fetch(`${process.env.NEXT_PUBLIC_PEERCODE_API_URL}/v1/api/users/${id}`)
      .then((res) => {
        return res.json();
      });
};

export const useGetUser = (id: string) => {
	const { data, isFetching, error, isError, isLoading } = useQuery(
		['getUser'],
		() => getUser(id), {
      staleTime: 5000,
      cacheTime: 10000,
		}
	);
	return {
		data, isFetching, isError, error, isLoading
	};
};
