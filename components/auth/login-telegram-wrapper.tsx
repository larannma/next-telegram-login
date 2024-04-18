"use server";

import { LoginButton } from "@telegram-auth/react";
import { signIn } from "@/auth";


const LoginTelegramWrapper = () => {

  return(
    <LoginButton
			botUsername="fuchur_telegram_bot"
			onAuthCallback={(data) => {
        signIn("telegram-login", { redirectTo: "/" }, data as any);
			}}
		/>
  );
};

export default LoginTelegramWrapper;