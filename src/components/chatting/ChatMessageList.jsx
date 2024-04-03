import { Flex, Stack, Text, Spinner } from '@chakra-ui/react'
import ChatMessage from './ChatMessage';

import useChattingStore from '../../stores/chatting';
import useChatListStore from '../../stores/chatList';

function ChatMessageList(props) {

    const { chatList, chatLoading } = useChattingStore();
    const { selectedChat } = useChatListStore();

    return (
        <Flex h='85vh' overflow-y='auto' direction='column-reverse' overflowY='auto'>
            { chatLoading ? <Spinner size='md' mb='1rem'/> : null }
            {
                chatList.slice(0).reverse().map(message => (
                    <ChatMessage
                        key={message.id}
                        message={message.message}
                        timestamp={message.timestamp}
                        isUser={message.isUser}
                        isError={message.isError}
                    />
                ))
            }
            <Stack textAlign='left'>
            <Text
                fontSize='4xl'
                as='b'
            >
                {selectedChat.title}
            </Text>
            <Text
                fontSize='xs'
                mb='50px'
            >
                {selectedChat.id}
            </Text>
            </Stack>

        </Flex >
    );
}

export default ChatMessageList;
