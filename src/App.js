import { Outlet } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import Footer from './components/Footer';
import ToggleThemeSwitch from './components/ToggleThemeSwitch';



function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <ToggleThemeSwitch/>
        <Outlet />
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
