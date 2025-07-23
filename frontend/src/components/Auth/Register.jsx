import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../contexts/user/UserContext";

export default function Register() {
  const { registerUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, email, password, confirmPassword } = newUser;

    if (!username || !email || !password || !confirmPassword) {
      return setErrorMsg("Todos los campos son obligatorios");
    }

    if (password !== confirmPassword) {
      return setErrorMsg("Las contraseñas no coinciden");
    }

    const res = await registerUser(newUser);

    if (res) {
      navigate("/iniciar-sesion");
    } else {
      setErrorMsg("Hubo un error al registrar");
    }
  };

  return (
    <>
      <section className="flex flex-col justify-center py-8 mx-auto">
        <h2 className="text-center text-3xl font-bold mt-8">Crea tu cuenta</h2>
        <p className="mt-2 text-center text-sm">
          ¿Ya tienes cuenta? &nbsp;
          <Link
            to="/iniciar-sesion"
            className="font-medium text-brand-light-purple underline"
          >
            Inicia sesión
          </Link>
        </p>
      </section>

      <section className="mt-8 px-4 mx-auto w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="form-label">
              Nombre de usuario
            </label>
            <input
              onChange={handleChange}
              name="username"
              type="text"
              className="form-input"
            />
          </div>

          <div>
            <label htmlFor="email" className="form-label">
              Correo electrónico
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
              Contraseña
            </label>
            <input
              onChange={handleChange}
              name="password"
              type="password"
              required
              className="form-input"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="form-label">
              Confirma tu contraseña
            </label>
            <input
              onChange={handleChange}
              name="confirmPassword"
              type="password"
              required
              className="form-input"
            />
          </div>

          <div className="py-4">
            <button type="submit" className="form-button">
              Crear cuenta
            </button>
          </div>

          {errorMsg && (
            <p className="text-center text-red-800">{errorMsg}</p>
          )}
        </form>
      </section>
    </>
  );
}
