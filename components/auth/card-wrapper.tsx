"use client";

import { 
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from "@/components/ui/card";

interface CardWrapperProps{
  children: React.ReactNode,
  headerLabel: string,
  backButtonLabel: string,
  backButtonHref: string,
  showSocial?: boolean
};

import { Header } from "@/components/auth/header";
import { Social } from "@/components/auth/social";
import { BackButton } from "@/components/auth/back-button";

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial
}: CardWrapperProps) => {
  return(
    <div>
      <Card>
        <CardHeader>
          <Header label={headerLabel}/>
        </CardHeader>
        <CardContent>
         {children}
        </CardContent>
        {showSocial && (
          <CardFooter>
            <Social />
          </CardFooter>
        )}
        <CardFooter>
          <BackButton
            href={backButtonHref}
            label={backButtonLabel}>
          </BackButton>
        </CardFooter>
      </Card>
    </div>
  )
}