import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
});

interface HeaderProps{
  label: string
};

export const Header = ({
  label
}: HeaderProps) => {
  return(
    <div>
      <h1>
        Вход в систему
      </h1>
      <p>
        {label}
      </p>
    </div>
  )
}