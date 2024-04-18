"use client"

import { LoginForm } from "../../../components/auth/login-form";
import { LoginButton } from "@telegram-auth/react";
import { signIn } from "next-auth/react"


const LoginPage = () => {

  return(
    <>
      <LoginForm/>
      
      <LoginButton
        botUsername="fuchur_telegram_bot"
        onAuthCallback={async (data) => {
          await signIn('telegram-login');
        }}
      />
    </>
  );
};

export default LoginPage;