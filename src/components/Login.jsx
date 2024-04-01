import { useState } from 'react';
import { Flex, Container, FormControl, Text, FormErrorMessage, FormLabel, Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";

import { fetchLogin } from '../api/login';


function Login() {

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const [id, setId] = useState('')
    const [password, setPassword] = useState('')

    const isError = password === ''

    const handleId = (event) => setId(event.target.value)
    const handlePassword = (event) => setPassword(event.target.value)

    const navigate = useNavigate();
    const justNavigate = () => {
        navigate("/")
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchLogin(id, password, justNavigate)
    }

    const handleSignup = (event) => {
        event.preventDefault();
        navigate("/signup")
    }

    return (
        <Container h='95vh' pt='30vh'>
            <Flex justify="center">

                <form
                    onSubmit={handleSubmit}
                    width='20rem'
                >
                    <FormControl width='20rem'>
                        {/* <FormLabel>Login</FormLabel> */}
                        <Input
                            required
                            onChange={handleId}
                            width='20rem'
                            size='md'
                            mb='5px'
                            placeholder='ID'
                        />
                        <InputGroup
                            mb='10px'
                            width='20rem'
                        >
                            <Input
                                required
                                onChange={handlePassword}
                                width='20rem'
                                size='md'
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                                placeholder='Password'
                            />{!isError ? null : (
                                <FormErrorMessage>Email is required.</FormErrorMessage>
                            )}
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                    {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        <Button
                            mb='10px'
                            width='20rem'
                            type='submit'
                            mr='5px'
                        >
                            Login
                        </Button>
                        <Button
                            mb='30px'
                            width='20rem'
                            onClick={handleSignup}
                            variant='ghost'
                        >
                            Sign up
                        </Button>
                    </FormControl>
                </form>
            </Flex>
        </Container>
    );
}

export default Login;
