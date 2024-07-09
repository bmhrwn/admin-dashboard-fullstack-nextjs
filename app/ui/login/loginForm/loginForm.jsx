"use client"

import { authenticate } from "@/app/lib/actions";
import styles from "./loginForm.module.css";
import {useFormState} from "react-dom"
const LoginForm = () => {
  const [state, fromAction] = useFormState(authenticate, undefined)

  return (
    <div className={styles.container}>
      <form action={fromAction} className={styles.form}>
        <h1>Login</h1>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <button>Login</button>
        {state && state}
      </form>
    </div>
  );
};

export default LoginForm;
