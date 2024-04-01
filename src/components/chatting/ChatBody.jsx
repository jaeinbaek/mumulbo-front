import { Container, Flex, Grid } from '@chakra-ui/react'
import Chatting from './Chatting';
import ChatList from './ChatList';
import ToggleThemeSwitch from '../ToggleThemeSwitch';

function ChatBody() {
  return (
    <div className="body" height='95vh'>
      <ToggleThemeSwitch />
      <Grid templateColumns='1fr 3fr 1fr' gap={1}>
        <ChatList />
        <Chatting />
        {/* Temp */}
        <Container />
      </Grid>
    </div>
  );
}

export default ChatBody;
