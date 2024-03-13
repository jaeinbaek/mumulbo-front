import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Body from './components/Body';
import ToggleThemeSwitch from './components/ToggleThemeSwitch';



function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <ToggleThemeSwitch/>
        <Body />
      </div>
    </ChakraProvider>
  );
}

export default App;
