import { useState } from 'react';
import { Flex, Container, IconButton, Input, Icon } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import ChatMessageList from './ChatMessageList';
import ChatLandingPage from './chatLandingPage';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";

import useChattingStore from '../../stores/chatting';
import useChatListStore from '../../stores/chatList';

function Chatting() {

    const params = useParams();
    const prdId = params.id;

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
    
    const { chat, chatLoading, chatError } = useChattingStore();
    // 현재 선택된 대화 정보
    const { selectedChat } = useChatListStore();

    const { setChat, pushChatList, setChatLoading, setChatError } = useChattingStore(state => state);

    const handleChatMessageChange = (event) => setChat({ isUser: true, timestamp: getNowDate(), message: event.target.value })

    const handleChatEnter = (e) => {
        if (e.key === "Enter") {
            if (!chat.message) {
            } else {
                pushChatList(chat);
                // 초기화
                setChat({ isUser: true, timestamp: '', message: '' });
                fetchChat();

            }
        }
    };

    const handleChatSubmit = () => {
        if (!chat.message) {
        } else {
            pushChatList(chat);
            // 초기화
            setChat({ isUser: true, timestamp: '', message: '' });
            fetchChat();
        }
    };

    const fetchChat = async () => {
        try {
            // 요청이 시작 할 때에는 error 와 users 를 초기화하고
            setChatError(false);
            // loading 상태를 true 로 바꿉니다.
            setChatLoading(true);
            await axios.post('http://1.235.192.197:8080/redhat/query', { inputs: chat.message })
                .then((response) => {
                    // 실제
                    let generated_text = response.data.response;
                    // 테스트
                    // let generated_text = JSON.parse(response.request.responseText).generated_text;
                    let reply = {
                        isUser: false,
                        isError: false,
                        timestamp: getNowDate(),
                        message: generated_text
                    }
                    pushChatList(reply);
                }
                )
        } catch (e) {
            setChatError(e);
            console.log(e)
            let reply = {
                isUser: false,
                isError: true,
                timestamp: getNowDate(),
                message: e?.code
            }
            pushChatList(reply);
        }
        setChatLoading(false);
    }

    return (
        <Container>
            { selectedChat.id === '' ? <ChatLandingPage /> :  <ChatMessageList />}
            <Flex id='a'>
                <Input
                    isDisabled={chatLoading}
                    value={chat.message}
                    onChange={handleChatMessageChange}
                    onKeyDown={handleChatEnter}
                    placeholder='여기다가 물어보세요!'
                    size='lg'
                    mr='5px'
                />
                <IconButton
                    isDisabled={chatLoading}
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
