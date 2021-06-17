import { useMutation } from "react-query"
import services from '../services';

export const useCreateContact = () => {
    const { data, mutateAsync: createContact} = useMutation((contact: any) => services.createContact(contact));
    return {
        data,
        createContact
    };
}