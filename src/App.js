import { Outlet } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Outlet />
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
