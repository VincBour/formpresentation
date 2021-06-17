import React from "react";
import { Typography } from "@talentsoft/design-system";
import {
  FormGenerator,
  FormGeneratorProvider,
  SubmitButton,
  SubmitHandler,
} from "@talentsoft/forms";
import { LoaderDots } from "@talentsoft/design-system";
import { useGetData } from "../../query-store/useGetData";
import { IFormFields } from "../../types/IFormFields";
import { sleep } from "../../utils/sleep";
import { useCreateContact } from "../../query-store/useCreateContact";
import { Layout } from "../layout/Layout";

export const FormGeneratorComponent = () => {
  const [values, setValues] = React.useState<IFormFields>();
  const { createContact } = useCreateContact();
  const handleSubmit: SubmitHandler<IFormFields> = React.useCallback(
    async (submittedValues, helper) => {
      await sleep(3000);
      setValues(submittedValues);
      const data = await createContact(submittedValues);
      helper.setFieldError(data.field, data.message);
    },
    []
  );

  const { data, isLoading } = useGetData();

  if (isLoading) {
    return <LoaderDots />;
  }
  return (
    <Layout>
      <FormGeneratorProvider form={data} onSubmit={handleSubmit}>
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
