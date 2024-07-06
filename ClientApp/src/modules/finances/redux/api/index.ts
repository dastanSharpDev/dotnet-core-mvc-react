import baseApi from '../../../../redux/api';

export type TChartData = {
  quarter: string;
  Monthly: number;
  Quarterly: number;
  Yearly: number;
};

export const financesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getChartData: build.query<TChartData[], void>({
      query: () => 'chartData.json',
      transformResponse: (response: { data: TChartData[] }) => response.data,
    }),
  }),
  overrideExisting: false,
});

export const { useGetChartDataQuery } = financesApi;