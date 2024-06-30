import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <header>
        <h1>
          <Link to="/">Podcaster</Link>
        </h1>
        {/* Aquí puedes agregar más elementos de la cabecera si es necesario */}
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        {/* Aquí puedes agregar el contenido del pie de página si es necesario */}
      </footer>
    </div>
  );
};

export default App;