import axios from "axios"
import { IFieldParamsModel } from "../contracts";
import { IFieldsModel } from "../contracts/IFieldModel";
import { IContact } from "../types";
import { IFieldParams } from "../types/IFieldParams";

axios.defaults.baseURL = process.env.BACK_URL;
axios.defaults.headers = {
    'Content-Type': 'application/json'
}
const getFields = () => async (): Promise<IFieldsModel> => {
  const response = await axios.get('/formgenerator/fields');
  const result = await response.data;
  return result;
};

const createContact = async (contact: IContact) => {
    const response = await axios.post('/createcontact', contact);
    const result = await response.data;
    return result;
}

const getFieldsParams = () => async (): Promise<IFieldParamsModel> => {
    const response = await axios.get('/managefields/getparams');
    const result = await response.data;
    return result;
}

const saveFieldParams = async (params: IFieldParams) => {
    const result = await axios.post('/managefields/saveparams', params);
}

export default {
    getFields,
    createContact,
    getFieldsParams,
    saveFieldParams
}
