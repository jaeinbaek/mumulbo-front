import { Container } from '@chakra-ui/react'
import Chatting from './Chatting';
import ToggleThemeSwitch from './ToggleThemeSwitch';

function ChatBody() {
    return (
      <div className="body" >
            <ToggleThemeSwitch />
             <Container h='calc(95vh)'>
                 <Chatting />
             </Container>
      </div>
    );
  }
  
  export default ChatBody;
  