export interface IFieldModelProps {
    type: string,
    name: string,
    visible: boolean,
    initialValue:string,
    required: boolean,
    label: string,
    readOnly: boolean,
    placeHolder?: string,
    multiline?: boolean,
    rows?: number,
    rowsMax?: number
}