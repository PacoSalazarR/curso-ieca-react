import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import {HelloWorld as HolaMundo} from './components/HelloWorld';
import { useState } from 'react';
import ControlledComponent from './components/ControlledComponent';
import FocusInput from './components/FocusInput';

function App() {
  const [routes, setRoutes] = useState([
    {
      path: "./hello-world",
      name: "",
      component: <HolaMundo />,
    },
    {
      path: "/focus",
      name: "Focus",
      component: <FocusInput />,
    },
    {
      path: "/controlled",
      name: "Controlled",
      component: <ControlledComponent />,
    },
  ]);
  return ( 
  <Router>
    <nav className='absolute top-0 left-0 h-32 bg-green-300 w-full'>
      <h1>Talento Tech</h1>
    </nav>
    <aside className='absolute left-0 top-8 bg-gray-900'>
      {routes.map((route) => {
        <Link to={route.path} key={route.path}>
          {route.name}
        </Link>
      })}
    </aside>
    <main>
      <Routes>
        {routes.map((route)=>{
          <Route 
            path={route.path}
            element={route.element}
            key={`route-${route.path}`}
          />
        })}
      </Routes>
    </main>
  </Router>
  );
}

export default App
