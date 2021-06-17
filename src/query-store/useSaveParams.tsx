import { useMutation } from "react-query";
import { IFieldParams } from "../types/IFieldParams";
import services from '../services';

export const useSaveParams = () => useMutation((params: IFieldParams) => services.saveParams(params))