import React from "react";
import { Typography } from "@talentsoft/design-system";
import {
  FormGenerator,
  FormGeneratorProvider,
  SubmitButton,
  SubmitHandler,
} from "@talentsoft/forms";
import { LoaderDots } from "@talentsoft/design-system";
import { useGetData as useGetFields } from "../../query-store/useGetData";
import { IFormFields } from "../../types/IFormFields";
import { createField, sleep } from "../../utils";
import { useCreateContact } from "../../query-store/useCreateContact";
import { Layout } from "../strutures/layout/Layout";
import { IContact } from "../../types";

export const FormGeneratorComponent = () => {
  const [values, setValues] = React.useState<IFormFields>();
  
  const { createContact } = useCreateContact();

  const handleSubmit: SubmitHandler<IFormFields> = React.useCallback(
    async (submittedValues, helper) => {
      await sleep(3000);
      setValues(submittedValues);
      // TODO add mapping IFormField to IContact
      const data = await createContact(submittedValues as IContact);
      helper.setFieldError(data.field, data.message);
    },
    []
  );

  const { data, isLoading } = useGetFields();

  if (isLoading) {
    return <LoaderDots />;
  }
  const fields = createField(data);
  
  return (
    <Layout>
      <FormGeneratorProvider form={fields} onSubmit={handleSubmit}>
        <FormGenerator>
          <SubmitButton>Submit</SubmitButton>
        </FormGenerator>
      </FormGeneratorProvider>
      {values && (
        <Typography>You submitted {JSON.stringify(values)}</Typography>
      )}
    </Layout>
  );
};
