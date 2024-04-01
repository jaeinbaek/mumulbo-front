import { Container, Text, Center, Grid } from '@chakra-ui/react'


function Footer() {
  return (
      <Grid position='absolute' top='95vh' height='5vh' width='100vw' templateColumns='1fr 1fr 1fr' gap={0} >
        {/* Temp */}
        <Container />
        <Center h='calc(5vh)'>
          <Text fontSize='xs'>Copyright 2024. OSSLAB all rights reserved.</Text>
        </Center>
        {/* Temp */}
        <Container />
      </Grid>
  );
}

export default Footer;
