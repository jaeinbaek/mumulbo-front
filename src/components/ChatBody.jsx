import { Container } from '@chakra-ui/react'
import Chatting from './Chatting';

function ChatBody() {
    return (
      <div className="body" >
             <Container h='calc(95vh)'>
                 <Chatting />
             </Container>
      </div>
    );
  }
  
  export default ChatBody;
  