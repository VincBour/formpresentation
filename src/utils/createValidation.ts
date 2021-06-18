import { schemaValidator } from "@talentsoft/forms";

export function createValidation(type: any, isRequired: boolean) {
    const mapping: {[key:string]: any} ={
        'name': isRequired ? schemaValidator
        .string()
        .min(2, "Too short!")
        .max(50, "Too long!").required() : schemaValidator
        .string()
        .min(2, "Too short!")
        .max(50, "Too long!"),
        'email': isRequired ? schemaValidator
        .string()
        .email("Need to be an valid email !").required() : schemaValidator
        .string()
        .email("Need to be an valid email !"),
        'message': schemaValidator.string().nullable().max(140, "Too long!")
    }
    return mapping[type];
}