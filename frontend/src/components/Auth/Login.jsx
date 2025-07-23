import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../contexts/user/UserContext";

export default function Login() {
  const { loginUser } = useContext(UserContext);
  const [logUser, setLogUser] = useState({ email: "", password: "" });
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setLogUser({ ...logUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!logUser.email || !logUser.password) {
      return setErrorMsg("Todos los campos son obligatorios");
    }

    const res = await loginUser(logUser);
    if (res) setErrorMsg(res);
  };

  return (
    <>
      <section className="flex flex-col justify-center py-8 mx-auto">
        <h2 className="text-center text-3xl font-bold mt-8">Iniciar sesión</h2>
        <p className="mt-2 text-center text-sm">
          ¿Aún sin cuenta? &nbsp;
          <Link
            to="/registro"
            className="font-medium text-brand-light-purple underline"
          >
            Regístrate
          </Link>
        </p>
      </section>

      <section className="mt-8 px-4 mx-auto w-full max-w-md">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="form-label">
              Tu correo electrónico
            </label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              className="form-input"
            />
          </div>

          <div>
            <label htmlFor="password" className="form-label">
              Tu contraseña
            </label>
            <input
              onChange={handleChange}
              name="password"
              type="password"
              className="form-input"
            />
          </div>

          <button type="submit" className="form-button">
            Acceder a tu cuenta
          </button>

          {errorMsg && (
            <p className="text-center text-red-800">{errorMsg}</p>
          )}
        </form>
      </section>
    </>
  );
}

