import { useQuery } from "react-query";
import services from '../services';
import { IFieldParamsModel } from "../contracts";
import { GET_FIELDS_PARAMS } from "./query-key";

export const useGetFieldsParams = () => useQuery<IFieldParamsModel, Error, IFieldParamsModel>({queryKey: GET_FIELDS_PARAMS, queryFn: services.getFieldsParams()});