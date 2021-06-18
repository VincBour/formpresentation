import { useMutation } from "react-query"
import services from '../services';
import { IContact } from "../types";

export const useCreateContact = () => {
    const { data, mutateAsync: createContact} = useMutation((contact: IContact) => services.createContact(contact));
    return {
        data,
        createContact
    };
}