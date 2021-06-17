import axios from "axios"
import { IFieldModel } from "../contract/IFieldModel";
import { IFieldParams } from "../types/IFieldParams";
import { IFormFields } from "../types/IFormFields";
const {schemaValidator} = require("@talentsoft/forms");

axios.defaults.baseURL = process.env.BACK_URL;
axios.defaults.headers = {
    'Content-Type': 'application/json'
}
const getData = () => async () => {
  const response = await axios.get('/data');
  const result = await response.data;
  const data = createData(result);
  return data;
};

const createContact = async (contact:any) => {
    const response = await axios.post('/createcontact', contact);
    const result = await response.data;
    return result;
}

const getParams = () => async () => {
    const response = await axios.get('/getparams');
    const result = await response.data;
    return result;
}

const saveParams = async (params: IFieldParams) => {
    const result = await axios.post('/saveparams', params);
}

export default {
    getData,
    createContact,
    getParams,
    saveParams
}


interface IFieldForm{
    type: string,
    label: string,
    required: boolean,
    name: string,
    initialValue: string,
    visible: boolean,
    placeHolder: string,
    readOnly: boolean
    
}

function createData(result: any) {
    const data = result.fields.map((f:IFieldForm) => {
      console.log('FIELD', f);
        return {
        type: f.type,
        name: f.name,
        initialValue: f.initialValue,
        label: f.label,
        visible: f.visible ? () => true : () => false,
        required: f.required,
        placeholder: f.placeHolder,
        readOnly: f.readOnly,
        validation: getValidation(f.name, f.required)
    }})
    return data;
}

function getValidation(type: any, isRequired: boolean) {
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

