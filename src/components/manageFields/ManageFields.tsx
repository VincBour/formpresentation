import React from "react";
import {
  LoaderDots,
  Table,
  TableBody,
  TableCell,
  TableRow,
  useToaster,
} from "@talentsoft/design-system";
import { useGetParams } from "../../query-store/useGetParams";
import { Form, schemaValidator, SubmitButton, SubmitHandler, CheckboxField, TextField } from "@talentsoft/forms";
import { IFieldParams } from "../../types/IFieldParams";
import { IFieldModel } from "../../contract/IFieldModel";
import { useSaveParams } from "../../query-store/useSaveParams";

export const ManageFields = () => {
  const { data, isLoading, refetch } = useGetParams();
  const { mutateAsync } = useSaveParams();
  const { displaySuccess } = useToaster();
  React.useEffect(() => {
    refetch();
  }, [])
  const handleSubmit: SubmitHandler<IFieldParams> = React.useCallback(
      async (submittedValues, helper) => {
          console.log('submittedValues', submittedValues);
          mutateAsync(submittedValues);
          displaySuccess('Successful');
        },
        []
        );
        
        if (isLoading) {
            return <LoaderDots />;
        }
        const initialValuesForName = data?.fields.find((f) => f.id === "name") as Omit<
        IFieldModel,
        "id"
        >;
        const initialValuesForEmail = data?.fields.find((f) => f.id === "email") as Omit<
        IFieldModel,
        "id"
        >;
  return (
    <>
      <Form<IFieldParams>
        initialValues={{
          name: { ...initialValuesForName },
          email: { ...initialValuesForEmail },
        }}
        validationSchema={schemaValidator.object().shape({
          name: schemaValidator.object((
            {
              label: schemaValidator.string().required("A label is required"),
              required: schemaValidator.boolean(),
              readOnly: schemaValidator.boolean(),
              placeHolder: schemaValidator.string().nullable(),
            }
          )),
          email: schemaValidator.object({
              label: schemaValidator.string().required("A label is required"),
              required: schemaValidator.boolean(),
              readOnly: schemaValidator.boolean(),
              placeHolder: schemaValidator.string().nullable(),
            }
          ),
        })}
        onSubmit={handleSubmit}
      >
        <Table>
            <TableBody>
                <TableRow>
                    <TableCell>
                        Name field:
                    </TableCell>
                    <TableCell>
                        <TextField name="name.label" label='Label' required />
                    </TableCell>
                    <TableCell>
                        <CheckboxField name='name.required' label="Required"/>
                    </TableCell>
                    <TableCell>
                        <CheckboxField name='name.readOnly' label="ReadOnly"/>
                    </TableCell>
                    <TableCell>
                        <TextField name='name.placeHolder' label="placeHolder"/>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        Email field:
                    </TableCell>
                    <TableCell>
                        <TextField name="email.label" label='Label' required />
                    </TableCell>
                    <TableCell>
                        <CheckboxField name='email.required' label="required"/>
                    </TableCell>
                    <TableCell>
                        <CheckboxField name='email.readOnly' label="readOnly"/>
                    </TableCell>
                    <TableCell>
                        <TextField name='email.placeHolder' label="placeHolder"/>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
        <SubmitButton>Save</SubmitButton>
      </Form>
    </>
  );
};
