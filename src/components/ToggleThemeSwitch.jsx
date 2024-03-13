import { 
  useColorMode,
  Switch,
  Text,
  Flex,
  Wrap
  } from '@chakra-ui/react'

function ToggleThemeSwitch() {
    const { toggleColorMode } = useColorMode()

    return (
        <Flex 
          w='115px' 
          position='fixed'
          top='10px'
          right='10px'
        >
          <Text fontSize='xs' as='kbd' mr='8px'>Dark/Light</Text>
          <Switch onChange={toggleColorMode}></Switch>
        </Flex>
    );
  }

export default ToggleThemeSwitch;