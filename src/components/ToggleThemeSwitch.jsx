import { 
  useColorMode,
  Switch,
  Text,
  Flex,
  Button,
  ButtonGroup
  } from '@chakra-ui/react'

import useAuthStore from '../stores/auth';
import useChattingStore from '../stores/chatting';

import { getCookieToken, removeCookieToken } from '../stores/cookies';

function ToggleThemeSwitch() {
    const { toggleColorMode } = useColorMode()

    const logout = () => {
      useChattingStore.getState().clearChatting();
      useAuthStore.getState().deleteToken();
      removeCookieToken();
      console.log(console.log(useAuthStore.getState().authToken.authenticated));
    }
    
    return (
        <Flex 
          w='150px' 
          position='fixed'
          top='10px'
          right='20px'
        >
          <ButtonGroup gap='1'>
          <Button onClick={toggleColorMode} size='xs'>Color Mode</Button>
          <Button onClick={logout} size='xs'>Logout</Button>
          </ButtonGroup>
          {/* <Text fontSize='xs' as='kbd' mr='8px'>Dark/Light</Text> */}
          {/* <Switch onChange={toggleColorMode}></Switch> */}
        </Flex>
    );
  }

export default ToggleThemeSwitch;