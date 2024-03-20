import {createBrowserRouter} from "react-router-dom";

import App from "./App";
import ChatBody from './components/ChatBody';
import NotFound from './components/NotFound';


export const router = createBrowserRouter([
  {
    path: "/", 
    element: <App />, 
    errorElement: <NotFound />,
    children: [
      {
        index: true,  
        path: "",
        element: <ChatBody />,
      },
    //   {
    //     path: ":movieId",
    //     element: <DetailPage />,
    //   },
    //   {
    //     path: "search",
    //     element: <SearchPage />,
    //   },
    ],
  },
]);