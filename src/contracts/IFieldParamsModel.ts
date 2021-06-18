import { IFieldModelProps } from "./IFieldModelProps";

export interface IFieldParamsModel {
    fields: IFielParamsProps[]
}

interface IFielParamsProps extends Partial<IFieldModelProps> {
    id: string,
}