import React from "react";
import {
  Form,
  schemaValidator,
  SubmitButton,
  SubmitHandler,
  TextField,
} from "@talentsoft/forms";
import { Typography } from "@talentsoft/design-system";
import { sleep } from "../../utils";
import { IFormFields } from "../../types/IFormFields";
import { useCreateContact } from "../../query-store/useCreateContact";
import { Layout } from "../strutures/layout/Layout";
import { IContact } from "../../types";

export const TalentsoftForm = () => {
  const [values, setValues] = React.useState<IFormFields>();
  const { createContact } = useCreateContact();
  const handleSubmit: SubmitHandler<IFormFields> = React.useCallback(
    async (submittedValues, helper) => {
      await sleep(3000);
      setValues(submittedValues);
      const data = await createContact(submittedValues as IContact);

      helper.setFieldError(data.field, data.message);
    },
    []
  );
  return (
    <Layout>
      <Form<IFormFields>
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        validationSchema={schemaValidator.object().shape<IFormFields>({
          name: schemaValidator
            .string()
            .min(2, "Too short!")
            .max(50, "Too long!")
            .required(),
          email: schemaValidator
            .string()
            .email("Need to be an valid email !")
            .required(),
          message: schemaValidator.string().nullable().max(140, "Too long!"),
        })}
        onSubmit={handleSubmit}
      >
        <TextField
          name="name"
          label="Name"
          required
          fullWidth
          placeholder="test"
        />
        <TextField name="email" label="e-mail" required fullWidth />
        <TextField
          name="message"
          label="Message"
          rows={4}
          rowsMax={6}
          fullWidth
          multiline
        />

        <SubmitButton>Submit</SubmitButton>
      </Form>
      <div>
        {values && (
          <Typography>You submitted {JSON.stringify(values)}</Typography>
        )}
      </div>
    </Layout>
  );
};
