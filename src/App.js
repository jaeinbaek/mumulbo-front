import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Body from './components/Body';


function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Body />
      </div>
    </ChakraProvider>
  );
}

export default App;
