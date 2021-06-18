import { useQuery } from "react-query";
import services from "../services";
import { GET_FIELDS } from "./query-key";

export const useGetData = () =>
  useQuery({ queryKey: GET_FIELDS, queryFn: services.getFields() });
