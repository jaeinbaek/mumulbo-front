import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Body from './components/Body';
import Footer from './components/Footer';
import ToggleThemeSwitch from './components/ToggleThemeSwitch';



function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <ToggleThemeSwitch/>
        <Body />
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
