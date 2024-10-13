import { useForm } from 'react-hook-form';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserDataContext";

export const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [authError, setAuthError] = useState("");

  const onSubmit = (data) => {
    setAuthError("");

    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);

        alert("Inicio de sesión con éxito. ¡Bienvenido!");
        navigate("/");
      })
      .catch((error) => {
        if (error.code === 'auth/wrong-password') {
          setAuthError('La contraseña es incorrecta.');
        } else if (error.code === 'auth/user-not-found') {
          setAuthError('Este usuario no está registrado.');
        } else {
          setAuthError('Error al iniciar sesión. Verifica que tus credenciales sean correctas.');
        }
      });
  };

  return (


    <div className="container-fluid">
  <div className="row justify-content-center mt-5">
    <div className="col-lg-5 col-md-8 col-sm-10 col-12"> 
      <div className="login-card shadow-lg border-0 rounded-lg bg-transparent">
        <div className="card-body p-4 bg-transparent rounded-lg">
          <center>
            <h4 className="card-title">Kodigo Music</h4>
          </center>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group px-3">
              <label className="form-label">Correo Electrónico:</label>
              <input
                type="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                {...register("email", {
                  required: "El correo electrónico es requerido",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "El correo electrónico no es válido"
                  }
                })}
              />
              {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
            </div>
            <div className="form-group px-3">
              <label className="form-label">Contraseña:</label>
              <input
                type="password"
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                {...register("password", {
                  required: "La contraseña es requerida"
                })}
              />
              {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
            </div>
            <br />
            {authError && <div className="alert alert-danger px-3">{authError}</div>}
            <div className="form-group d-flex justify-content-center mt-4">
              <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};
