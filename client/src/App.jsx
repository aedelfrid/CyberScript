// components
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Lesson1 from './components/Lessons/Lesson1';
import Lessons from './components/Lessons/Lessons';
import Lesson2 from './components/Lessons/Lesson2';
import Register from './components/Register';
//import LoginButton from "./components/LoginButton";
//import LogoutButton from "./components/LogoutButton";
import Profile from './components/Profile';
import UserMessages from './components/UserMessages';
import Login from './components/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/lessons',
    element: <Lessons />,
    children: [
      {
        path: ':id',
        element: <Lesson1 />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/messages',
    element: <UserMessages />,
  },
  {
    path: '/logout',
    element: <Login />,
  },
  {
    path: '*',
    element: <Home />,
  },
]);

const App = () => {
  return (
    <main className="bg-[url('./images/background.png')] bg-cover text-white font-zen">
      <Header />
      <RouterProvider router={routes} fallbackElement={<Home />} />
      <Footer />
    </main>
  );
};

export default App;
