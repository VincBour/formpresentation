import React, { ChangeEvent } from "react";
import { Card, CardContent, Grid, Typography } from "@talentsoft/design-system";
import { makeStyles } from "@talentsoft/design-system";
import { Layout } from "../strutures/layout/Layout";
import { sleep } from "../../utils";

const useStyle = makeStyles((theme) => ({
  form: {
    margin: "0 auto",
    marginTop: "1em",
  },
  input: {
    font: "1em sans-serif",
    width: "300px",
    boxSizing: "border-box",
    // border: '1px solid #999',
    marginTop: "1em",
  },
  grid: {
    justifyContent: "center",
    width: "70%",
    height: "inherit",
  },
  card: {
    width: "inherit",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContent: {},
}));

const baseUrl = process.env.BACK_URL;

interface IValues {
  name?: string;
  email?: string;
  message?: string;
}

export const ClassicForm = () => {
  const styles = useStyle();

  const [values, setValues] = React.useState<IValues | undefined>({
    name: undefined,
    email: undefined,
    message: undefined,
  });

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) =>
    setValues({ ...values, name: e.target.value });
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setValues({ ...values, email: e.target.value });
  const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setValues({ ...values, message: e.target.value });

  const handleSubmit = () => {
    sleep(3000);
  };
  return (
    <Grid container spacing={3} className={styles.grid}>
      <Card className={styles.card}>
        <CardContent>
          <form
            action={`${baseUrl}/sendform`}
            method="post"
            className={styles.form}
          >
            <div className={styles.input}>
              <label htmlFor="name">Nom :</label>
              <input
                type="text"
                id="name"
                name="user_name"
                required
                onChange={onChangeName}
              />
              <span className="errorName"></span>
            </div>
            <div className={styles.input}>
              <label htmlFor="mail">e-mail :</label>
              <input
                type="email"
                id="mail"
                name="user_mail"
                required
                onChange={onChangeEmail}
              />
            </div>
            <div className={styles.input}>
              <label htmlFor="msg">Message :</label>
              <textarea
                id="msg"
                name="user_message"
                maxLength={140}
                rows={5}
                onChange={onChangeMessage}
              ></textarea>
            </div>
            <div className="button">
              <button type="submit">Envoyer le message</button>
            </div>
          </form>
          {values && (
            <Typography>You submitted {JSON.stringify(values)}</Typography>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
};
