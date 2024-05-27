import { 
  useColorMode,
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
          position='fixed'
          top='1rem'
          right='1rem'
        >
          <ButtonGroup gap='1'>
          <Button onClick={toggleColorMode} size='xs'>색상모드</Button>
          <Button onClick={logout} size='xs'>로그아웃</Button>
          </ButtonGroup>
        </Flex>
    );
  }

export default ToggleThemeSwitch;