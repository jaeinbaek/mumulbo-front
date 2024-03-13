import { useState } from 'react';
import { Flex, Container, IconButton, Input, Icon } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

import ChatMessageList from './ChatMessageList';


function Chatting() {

    const getNowDate = () => {
        // FE개발용 타임스탬프 생성로직
        const now = new Date();	// 현재 날짜 및 시간
        const year = now.getFullYear();
        const month = ('0' + (now.getMonth() + 1)).slice(-2);
        const day = ('0' + now.getDate()).slice(-2);
        const hours = ('0' + now.getHours()).slice(-2);
        const minutes = ('0' + now.getMinutes()).slice(-2);
        const seconds = ('0' + now.getSeconds()).slice(-2);
        const dateString = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;

        return dateString;
    }

    const [chatList, setChatList] = useState([]);

    const [chat, setChat] = useState({
        isUser: true,
        timestamp: getNowDate(),
        message: ''
    });

    const [reply, setReply] = useState({
        isUser: false,
        timestamp: getNowDate(),
        message: 'Reply for debuging.'
    });

    const handleChatMessageChange = (event) => setChat((prevState) => ({ ...prevState, message: event.target.value }))

    const handleChatEnter = (e) => {
        if (e.key === "Enter") {
            // FE개발용 답장로직
            setChat((prevState) => ({ ...prevState, timestamp: getNowDate()}))
            setReply((prevState) => ({ ...prevState, timestamp: getNowDate()}))
            const updatedArray = [...chatList, chat, reply];
            setChatList(updatedArray);
            //
            setChat((prevState) => ({ ...prevState, message: '' }))
        }
    };

    const handleChatSubmit = () => {

        // FE개발용 답장로직
        setChat((prevState) => ({ ...prevState, timestamp: getNowDate()}))
        setReply((prevState) => ({ ...prevState, timestamp: getNowDate()}))
        const updatedArray = [...chatList, chat, reply];
        setChatList(updatedArray);
        //
        setChat((prevState) => ({ ...prevState, message: '' }))
    };

    return (
        <Container position="absolute" bottom='25px'  >
            <ChatMessageList
                messages={chatList}
            />
            <Flex id='a'>
                <Input
                    value={chat.message}
                    onChange={handleChatMessageChange}
                    onKeyDown={handleChatEnter}
                    placeholder='Input here!'
                    size='lg'
                    mr='5px'
                />
                <IconButton
                    onClick={handleChatSubmit}
                    size='lg'
                    aria-label='Search database'
                    icon={<Icon as={CheckIcon} />}
                />
            </Flex>
        </Container>
    );
}

export default Chatting;
