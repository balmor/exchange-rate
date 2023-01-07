import { useQueries } from '@tanstack/react-query';

type IExchange = {
  prevBusinessDay: string;
  currency: string;
};

export type IExchangeTypes = {
  prevStartBusinessDay: string;
  prevEndBusinessDay: string;
  currency: string;
};

type IRates = {
  no: string;
  effectiveDate: string;
  mid: number;
};

type INBP = {
  code: string;
  currency: string;
  rates: IRates[];
  table: string;
};

const getExchange = async ({
  prevBusinessDay,
  currency,
}: IExchange): Promise<INBP> => {
  const url = `${process.env.REACT_APP_NBP_EXCHANGE_RATES_URL}/${currency}/${prevBusinessDay}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

const exchageOptions = ({ prevBusinessDay, currency }: IExchange) => ({
  queryKey: ['exchange', prevBusinessDay, currency],
  queryFn: () => getExchange({ prevBusinessDay, currency }),
  enabled: !!currency && !!prevBusinessDay,
  refetchOnWindowFocus: false,
});

export const useNBPGet = ({
  prevStartBusinessDay,
  prevEndBusinessDay,
  currency,
}: IExchangeTypes) => {
  return useQueries({
    queries: [
      exchageOptions({ prevBusinessDay: prevStartBusinessDay, currency }),
      exchageOptions({ prevBusinessDay: prevEndBusinessDay, currency }),
    ],
  });
};
