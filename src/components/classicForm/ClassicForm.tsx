import React, { ChangeEvent } from "react";
import { Typography } from "@talentsoft/design-system";
// import './classicFormStyle.css';
import { sleep } from "../../utils/sleep";
import { Layout } from "../layout/Layout";
import { makeStyles } from "@talentsoft/design-system";

const useStyle = makeStyles((theme) => ({
  form: {
    margin: '0 auto',
    width: '400px',
    marginTop: '1em'
  },
  input:{
    font: '1em sans-serif',
    width: '300px',
    boxSizing: 'border-box',
    // border: '1px solid #999',
    marginTop: '1em'
  }
}))

const baseUrl = process.env.BACK_URL;

interface IValues {
  name?: string,
  email?: string,
  message?: string
}

export const ClassicForm = () => {
  const styles = useStyle();

  const [values, setValues] = React.useState<IValues | undefined>({ name: undefined, email: undefined, message: undefined});
  
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => setValues({...values, name: e.target.value });
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setValues({...values, email: e.target.value });
  const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => setValues({...values, message: e.target.value });

  const handleSubmit = () =>  {
      console.log('SUBMITTEDVALUE', values);
      sleep(3000);
    }
  return (
    <Layout>
      <form action={`${baseUrl}/sendform`} method="post" className={styles.form}>
        <div className={styles.input}>
          <label htmlFor="name">Nom :</label>
          <input type="text" id="name" name="user_name" required onChange={onChangeName}/>
          <span className="errorName"></span>
        </div>
        <div className={styles.input}>
          <label htmlFor="mail">e-mail :</label>
          <input type="email" id="mail" name="user_mail" required onChange={onChangeEmail}/>
        </div>
        <div className={styles.input}>
          <label htmlFor="msg">Message :</label>
          <textarea id="msg" name="user_message" maxLength={140} rows={5} onChange={onChangeMessage}></textarea>
        </div>
        <div className="button">
          <button onSubmit={handleSubmit}>Envoyer le message</button>
        </div>
      </form>
      {values && (
        <Typography>You submitted {JSON.stringify(values)}</Typography>
      )}
    </Layout>
  );
};
