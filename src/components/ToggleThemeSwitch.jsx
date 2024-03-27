import { 
  useColorMode,
  Switch,
  Text,
  Flex,
  Button
  } from '@chakra-ui/react'
import useAuthStore from '../stores/auth';
import { getCookieToken, removeCookieToken } from '../stores/cookies';

function ToggleThemeSwitch() {
    const { toggleColorMode } = useColorMode()

    const logout = () => {
      useAuthStore.getState().deleteToken();
      removeCookieToken();
      console.log(console.log(useAuthStore.getState().authToken.authenticated));
    }
    
    return (
        <Flex 
          w='300px' 
          position='fixed'
          top='10px'
          right='10px'
        >
          <Button onClick={logout} size='xs'>Logout</Button>
          <Text fontSize='xs' as='kbd' mr='8px'>Dark/Light</Text>
          <Switch onChange={toggleColorMode}></Switch>
        </Flex>
    );
  }

export default ToggleThemeSwitch;