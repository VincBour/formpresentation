import { useQuery } from "react-query";
import { IFieldModel } from "../contract/IFieldModel";
import services from '../services';

export const useGetParams = () => useQuery<{fields: IFieldModel[]}, Error, {fields: IFieldModel[]}>('Params', services.getParams());