import { useQuery } from 'react-query';
import * as React from 'react';

const getUsers = (): any => {
	return fetch(`${process.env.NEXT_PUBLIC_PEERCODE_API_URL}/v1/api/users`)
      .then((res) => {
        return res.json();
      });
};

export const useGetUsers = () => {
	const { data, isFetching, error, isError, isLoading } = useQuery(
		['getUsers'],
		() => getUsers(), {
      staleTime: 5000,
      cacheTime: 10000,
		}
	);
	return {
		data, isFetching, isError, error, isLoading
	};
};
