import { useState } from 'react';
import { Flex, Container, FormControl, FormHelperText, FormErrorMessage, FormLabel, Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import { CheckIcon } from '@chakra-ui/icons'
import ChatMessageList from './ChatMessageList';
import axios from 'axios';

import useChattingStore from '../stores/chatting';

import { fetchLogin } from '../api/login';


function Login() {

    const { authToken } = useChattingStore();
    const { deleteToken } = useChattingStore(state => state);

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

    // Test 
    const clickSetToken = () => {
        // loginTest()
        navigate("/")
    }


    return (
        <Container h='95vh' verticalAlign='middle'>
            <form onSubmit={handleSubmit}>
                    <FormControl>
                        <FormLabel>Login</FormLabel>
                        <Input
                            required
                            onChange={handleId}
                            mb='5px'
                            placeholder='ID'
                        />
                        <InputGroup
                            mb='10px'
                            size='md'
                        >
                            <Input
                                required
                                onChange={handlePassword}
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
                            mb='30px'
                            type='submit'
                        >
                            Login
                        </Button>
                    </FormControl>
            </form>



            {/* //test// */}



            {/* <Container>
                <Button
                    onClick={clickSetToken}
                    mb='30px'
                >
                    AccessToken
                </Button>
                <Button
                    onClick={justNavigate}
                    mb='30px'
                >
                    justNavigate
                </Button>
            </Container> */}
        </Container>
    );
}

export default Login;
