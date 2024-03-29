import { useState } from 'react';
import { Flex, Container, FormControl, FormHelperText, FormErrorMessage, FormLabel, Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";

import { fetchSignup } from '../api/signup';


function Signup() {

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const [id, setId] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const isError = password === ''

    const handleId = (event) => setId(event.target.value)
    const handleEmail = (event) => setEmail(event.target.value)
    const handlePassword = (event) => setPassword(event.target.value)

    const navigate = useNavigate();
    const justNavigate = () => {
        navigate("/login")
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchSignup(id, email, password, justNavigate)
    }

    return (
        <Container h='95vh' pt='30vh'>
            <Flex justify="center" >
                <form 
                    onSubmit={handleSubmit}
                    width='20rem'
                >
                    <FormControl width='20rem'>
                        {/* <FormLabel>Signup</FormLabel> */}
                        <Input
                            required
                            onChange={handleId}
                            mb='5px'
                            width='20rem'
                            size='md'
                            placeholder='ID'
                        />
                        <Input
                            required
                            onChange={handleEmail}
                            mb='5px'
                            width='20rem'
                            size='md'
                            placeholder='Email'
                        />
                        <InputGroup
                            mb='10px'
                            size='md'
                            width='20rem'
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
                            width='20rem'
                            type='submit'
                        >
                            Sign up
                        </Button>
                    </FormControl>
                </form>
            </Flex>
        </Container>
    );
}

export default Signup;
