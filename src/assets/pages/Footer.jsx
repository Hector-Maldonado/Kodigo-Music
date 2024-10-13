import 'bootstrap-icons/font/bootstrap-icons.css';
 export const Footer = () => {
    
  return (
    
    <footer className=" mt-5">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-4">
            <h5>Acerca de Kodigo Music</h5>
            <p>
              Kodigo Music es una plataforma de música digital donde puedes descubrir las últimas canciones, explorar géneros, y más.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Soporte</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Preguntas Frecuentes</a></li>
              <li><a href="#" className="text-white">Términos y Condiciones</a></li>
              <li><a href="#" className="text-white">Política de Privacidad</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Síguenos</h5>
            <a href="#" className="text-white me-3">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="text-white me-3">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" className="text-white me-3">
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>&copy; 2024 Kodigo Music. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

