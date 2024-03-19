import { useState, useEffect, useRef } from 'react';
import { Flex, Container, IconButton, Input, Icon } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import ChatMessageList from './ChatMessageList';
import axios from 'axios';

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

    // 대화목록 State
    const [chatList, setChatList] = useState([]);

    // 현재 보낼 메시지 State
    const [chat, setChat] = useState({
        isUser: true,
        timestamp: '',
        message: ''
    });

    // 답변 State
    const [reply, setReply] = useState({
        isUser: false,
        timestamp: '',
        message: ''
    });

    const [generated_text, setGenerated_text] = useState({})

    const [chatLoading, setChatLoading] = useState(false);
    const [chatError, setChatError] = useState(null);

    const handleChatMessageChange = (event) => setChat((prevState) => ({ ...prevState, timestamp: getNowDate(), message: event.target.value }))

    const handleChatEnter = (e) => {
        if (e.key === "Enter") {
            if (!chat.message) {
            } else {
                setChatList(prevChatList => [...prevChatList, chat]);
                // 초기화
                setChat((prevState) => ({ isUser: prevState.isUser, timestamp: '', message: '' }));
                fetchChat();
                
            }
        }
    };

    const handleChatSubmit = () => {
        if (!chat.message) {
        } else {
            setChatList(prevChatList => [...prevChatList, chat]);
            // 초기화
            setChat((prevState) => ({ isUser: prevState.isUser, timestamp: '', message: '' }));
            // fetchChat();
        }
    };


    const fetchChat = async () => {
        try {
            // 요청이 시작 할 때에는 error 와 users 를 초기화하고
            setChatError(() => !chatError);
            // loading 상태를 true 로 바꿉니다.
            setChatLoading(() => !chatLoading);
            await axios.post('http://1.235.192.198:5000/osslab', { inputs: chat.message })
                .then((response) => {
                    let generated_text = JSON.parse(response.request.responseText).generated_text
                    let test = {
                        isUser: false,
                        timestamp: getNowDate(),
                        message: generated_text
                    }
                    setChatList(prevChatList => [...prevChatList, test]);

                }
                )
        } catch (e) {
            setChatError(e);
        }
        setChatLoading(false);
    }

    return (
        <Container position="absolute" bottom='25px' >
            <ChatMessageList
                messages={chatList}
            />
            <Flex id='a'>
                <Input
                    isDisabled={chatLoading}
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
