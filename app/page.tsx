import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LoginButton } from "@/components/auth/login-button";
import styles from "@/styles/Home.module.scss"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"]
});

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
});

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Добро пожаловать в приложение Фухур</h1>
          <div>
            <LoginButton>
              <Button size={"lg"} variant={"secondary"}>Погнали!</Button>
            </LoginButton>
          </div>
      </div>
    </main>
  );
}
