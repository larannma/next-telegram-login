"use client";

import { signOut } from "@/auth";
import { useRouter } from "next/navigation";

interface LogoutButtonProps{
  children: React.ReactNode,
  mode?: "modal" | "redirect",
  asChild?: boolean
}

export const LogoutButton = ({
  children,
  mode = "redirect",
  asChild
}: LogoutButtonProps) => {
  const router = useRouter();
  const onClick = async () => {
    await signOut()
    router.push("/");
  };

  if (mode === 'modal'){
    return (
      <span>
        Implement modal
      </span>
    )
  }
  return(
    <span onClick={onClick}>
      {children}
    </span>
  )
}