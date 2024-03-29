import { createBrowserRouter, Navigate } from "react-router-dom";

import useAuthStore from '../src/stores/auth';

import App from "./App";
import Login from './components/Login';
import Signup from './components/Signup';
import ChatBody from './components/ChatBody';
import NotFound from './components/NotFound';


const PrivateRoute = ({ children }) => {
    const isAuthenticated = useAuthStore((state) => state.authToken.authenticated)

    // const isAuthenticated = useAuthStore.subscribe(state => {return state.authToken.authenticated});
    // const isAuthenticated = useAuthStore.subscribe(state => {return state.authToken.authenticated});
    return isAuthenticated ? children : <Navigate to="/login" />;
  }
  
export const router = createBrowserRouter([
  {
    path: "/", 
    element: <App />, 
    errorElement: <NotFound />,
    children: [
      {
        index: true,  
        path: "",
        element: (
            <PrivateRoute>
                <ChatBody />
            </PrivateRoute>),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "mumulbo-front",
        element: <ChatBody />,
      }
    ],
},
]);