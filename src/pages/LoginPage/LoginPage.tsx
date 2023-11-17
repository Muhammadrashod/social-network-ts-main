import React from "react";
import { Heading } from "../../components/Typography/Heading";
import { StyledLink } from "../../components/Typography/StyledLink";
import { Button } from "../../components/UI/Button/Button";
import { Input } from "../../components/UI/Input/Input"
import { Container } from "../../components/UI/Container/Container.style";
import { RegistrationInfo } from "../../components/UI/RegistartionInfo/ReagistartionInfo";
import { StyledLoginPage } from "./LoginPage.style";


export const LoginPage = () => {
  return (
    <Container>
      <StyledLoginPage>
        <Heading headingText="Авторизация" />
        <form>
        <Input type="tel" placeholder="Номер телефона" errorMessage="Ошибка" />
        <Input type="text" placeholder="Пароль" errorMessage="Ошибка" />
          <Button isPrimary buttonText="Войти"/>
        </form>
        <StyledLink to="/" linkText="Забыли пароль?" />
        <RegistrationInfo />
     </StyledLoginPage>
    </Container>
  );
};
