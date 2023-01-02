import { useQueries } from 'react-query';

const getExchange = async (date: any, currency: string) => {
  const url = `${process.env.REACT_APP_NBP_EXCHANGE_RATES_URL}/${currency}/${date}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

const exchageOptions = (prevBusinessDay: string, currency: string) => ({
  queryKey: ['exchange', prevBusinessDay, currency],
  queryFn: () => getExchange(prevBusinessDay, currency),
  enabled: !!currency && !!prevBusinessDay,
  refetchOnWindowFocus: false,
});

export const useNBPGet = ({
  prevStartBusinessDay,
  prevEndBusinessDay,
  currency,
}: any) => {
  return useQueries([
    exchageOptions(prevStartBusinessDay, currency),
    exchageOptions(prevEndBusinessDay, currency),
  ]);
};
