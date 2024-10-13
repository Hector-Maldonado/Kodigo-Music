import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserDataContext";
import '../css/home.css'

export const Home = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);


  return (

    <div className='container py-4'>
      <h3>Bienvenido, {user.email} Disfruta de tu música favorita.</h3>
      
      <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card text-white bg-transparent border-light animated-card">
            <div className="card-body">
              <h5 className="card-title text-center" style={{ fontSize: '2rem' }}>Bienvenido a Kodigo Music</h5>
              <p className="card-text text-justify" style={{ fontSize: '1.25rem' }}>
                Kodigo Music es tu plataforma ideal para descubrir y disfrutar de tus canciones favoritas. Con una interfaz intuitiva y una amplia biblioteca musical, cada visita te ofrece una nueva experiencia. Ya sea que busques relajarte con playlists personalizadas o explorar nuevos géneros, Kodigo Music te acompaña en cada momento. Únete a nuestra comunidad y comienza tu viaje musical hoy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>



  );
};
