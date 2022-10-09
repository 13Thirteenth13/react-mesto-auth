import FormWithAuthorization from "./FormWithAuthorization";

function Register() {
  return (
    <>
      <FormWithAuthorization
        heading="Регистрация"
        buttonName="Зарегистрироваться"
      />
      <p className="auth__login-hint">Уже зарегистрированы? Войти</p>
    </>
  );
};

export default Register;
