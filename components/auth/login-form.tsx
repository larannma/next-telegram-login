import { CardWrapper } from "./card-wrapper"

export const LoginForm = () => {
  return (
    <CardWrapper
    headerLabel="С возвращением!"
    backButtonLabel="Не зарегестрированы?"
    backButtonHref="/auth/register"
    showSocial
    >
      Login form
    </CardWrapper>
  )
}