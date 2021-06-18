import { createValidation } from ".";
import { FormGeneratorType, TextFieldType } from "@talentsoft/forms";
import { IFieldModelProps, IFieldsModel } from "../contracts";


export function createField(result: IFieldsModel | undefined): FormGeneratorType<any>[] {
    if (!result) {
        return [];
    }
    return result.fields.map((field: IFieldModelProps) => {
        return {
            type: field.type,
            name: field.name,
            initialValue: field.initialValue,
            label: field.label,
            visible: field.visible ? () => true : () => false,
            required: field.required,
            placeholder: field.placeHolder,
            readOnly: field.readOnly,
            validation: createValidation(field.name, field.required),
            multiline: field.multiline ? field.multiline : false,
            rows: field.rows ? field.rows : undefined,
            rowsMax: field.rowsMax ? field.rowsMax : undefined,
        } as TextFieldType<any>
    }
    )
}
