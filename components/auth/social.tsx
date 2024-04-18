"use client";

import { FcGoogle } from "react-icons/fc";
import { FaTelegram } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import styles from "@/styles/social.module.scss"

export const Social = () => {
  return (
    <div>
      <Button
        size="lg"
        variant="outline"
        className={styles.button}
        onClick={() => {}}>
        <FcGoogle/>
      </Button>
      <Button
        size="lg"
        variant="outline"
        onClick={() => {}}>
        <FaTelegram className="h-5 w-5"/>
      </Button>
    </div>
  )
}