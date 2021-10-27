import Input from "../../components/Input/input";
import Button from "../../components/Button/button";
import goToPage from "../../utils/goToPage";

const data = {
  inputs: [
    {
      input: new Input({
        name: "Имя",
        type: "text",
        inputName: "first_name",
      }).render(),
    },
    {
      input: new Input({
        name: "Фамилия",
        type: "text",
        inputName: "second_name",
      }).render(),
    },
    {
      input: new Input({
        name: "Логин",
        type: "text",
        inputName: "login",
      }).render(),
    },
    {
      input: new Input({
        name: "Почта",
        type: "text",
        inputName: "email",
      }).render(),
    },
    {
      input: new Input({
        name: "Телефон",
        type: "text",
        inputName: "phone",
      }).render(),
    },
    {
      input: new Input({
        name: "Повторите пароль",
        type: "password",
        inputName: "password",
      }).render(),
    },
    {
      input: new Input({
        name: "Пароль",
        type: "password",
        inputName: "repeat-password",
      }).render(),
    },
  ],
  buttons: [
    {
      button: new Button({
        className: "_global-style__secondary-button",
        id: "login-sign-up",
        buttonText: "Зарегистрироваться",
        onClickAction: () => goToPage("chats"),
      }).render(),
    },
    {
      button: new Button({
        id: "login-sign-in",
        buttonText: "Войти",
        onClickAction: () => goToPage("login"),
      }).render(),
    },
  ],
};

export default data;