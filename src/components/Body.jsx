import { Center, Container } from '@chakra-ui/react'
import Chatting from './Chatting';

function Body() {
    return (
      <div className="body">
        <Center>
             <Container>
                 <Chatting />
             </Container>
        </Center>
      </div>
    );
  }
  
  export default Body;
  