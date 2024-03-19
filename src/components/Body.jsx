import { Container } from '@chakra-ui/react'
import Chatting from './Chatting';

function Body() {
    return (
      <div className="body" >
             <Container h='calc(95vh)'>
                 <Chatting />
             </Container>
      </div>
    );
  }
  
  export default Body;
  