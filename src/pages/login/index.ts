import "styles/login.css";
import loginTemplate from "./loginTemplate";
import Block from "../../modules/block";
import render from "../../utils/renderDOM";
import data from "./loginData";
import goToPage from "../../utils/goToPage";
import validation from "../../utils/validation";

export default class Login extends Block {
  constructor(props) {
    super(loginTemplate, props);
  }

  render() {
    return this.compile(this.props);
  }

  componentDidMount() {
    return document.addEventListener("DOMContentLoaded", () => {
      const loginInput = document.getElementById(
        "input-login"
      ) as HTMLInputElement;
      const passwordInput = document.getElementById(
        "input-password"
      ) as HTMLInputElement;

      loginInput.addEventListener("focus", () => {
        loginInput.classList.remove(
          "_global-style__error-validation",
          "_global-style__success-validation"
        );
      });

      passwordInput.addEventListener("focus", () => {
        passwordInput.classList.remove(
          "_global-style__error-validation",
          "_global-style__success-validation"
        );
      });

      loginInput.addEventListener("blur", () => {
        if (validation.checkLogin.test(loginInput.value)) {
          loginInput.classList.add("_global-style__success-validation");
          console.log(`Валидация не пройдена в ${loginInput.name}`);
        } else {
          loginInput.classList.add("_global-style__error-validation");
          console.log(`Валидация пройдена в ${loginInput.name}`);
        }
      });

      passwordInput.addEventListener("blur", () => {
        if (validation.checkPass.test(passwordInput.value)) {
          passwordInput.classList.add("_global-style__success-validation");
          console.log(`Валидация не пройдена в ${passwordInput.name}`);
        } else {
          passwordInput.classList.add("_global-style__error-validation");
          console.log(`Валидация пройдена в ${passwordInput.name}`);
        }
      });

      const loginButton = document.getElementById("login-sign-in");
      loginButton?.addEventListener("click", () => {
        if (
          !loginInput.value ||
          !validation.checkLogin.test(loginInput.value)
        ) {
          loginInput.classList.add("_global-style__error-validation");
          console.log(`Валидация не пройдена в ${loginInput.name}`);
        }
        if (
          !passwordInput.value ||
          !validation.checkPass.test(passwordInput.value)
        ) {
          passwordInput.classList.add("_global-style__error-validation");
          console.log(`Валидация не пройдена в ${passwordInput.name}`);
        }
        if (
          validation.checkLogin.test(loginInput.value) &&
          validation.checkPass.test(passwordInput.value)
        ) {
          loginInput.classList.add("_global-style__success-validation");
          passwordInput.classList.add("_global-style__success-validation");
          setTimeout(() => goToPage("chats"), 700);
        }
      });
      return null;
    });
  }
}

render("body", new Login(data));
