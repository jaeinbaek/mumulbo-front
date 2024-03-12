import { useState } from 'react';
import { Flex, IconButton, Input, Icon } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

import ChatMessage from './ChatMessage';


function Chatting() {

    const [chatList, setChatList] = useState([]);

    const [chat, setChat] = useState({
        isUser: true,
        message: ''
    });

    const [reply, setReply] = useState({
        isUser: false,
        message: 'Reply for debuging.'
    });


    const handleChatMessageChange = (event) => setChat({ isUser: true, message: event.target.value })

    const handleChatEnter = (e) => {
        if (e.key === "Enter") {
            // FE개발용 답장로직
            console.log(chat.isUser)
            const updatedArray = [...chatList, chat, reply];
            setChatList(updatedArray);
            console.log(chatList)
            //
            setChat((prevState) => ({ ...prevState, message: '' }))
        }
    };

    const handleChatSubmit = (e) => {
        // FE개발용 답장로직
        console.log(chat.isUser)
        const updatedArray = [...chatList, chat, reply];
        setChatList(updatedArray);
        console.log(chatList)
        //
        setChat((prevState) => ({ ...prevState, message: '' }))
    };

    return (
        <div>
            <ChatMessage messages={chatList} />
            <Flex>
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
                    icon={<Icon as={SearchIcon} />}
                />
            </Flex>
        </div>
    );
}

export default Chatting;
