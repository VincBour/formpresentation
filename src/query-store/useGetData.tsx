import { useQuery } from "react-query";
import services from '../services';

export const useGetData = () => useQuery('Data', services.getData());