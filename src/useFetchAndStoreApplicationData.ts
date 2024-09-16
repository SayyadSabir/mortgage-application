import { useEffect } from 'react';
import { useGetItemByIdQuery } from './apiSlice';
import { useAppDispatch } from './hooks';
import { setApiOverview } from './overviewSlice';

export const useFetchAndStoreApplicationData = () => {
  const dispatch = useAppDispatch();
  
  // Use the query to fetch data
  const { data, error, isLoading } = useGetItemByIdQuery('5');

  useEffect(() => {
    if (data) {
            // Dispatch specific parts of the response to Redux store
      dispatch(setApiOverview(data));
    }
  }, [data, dispatch]);

  return { data, error, isLoading };
};
