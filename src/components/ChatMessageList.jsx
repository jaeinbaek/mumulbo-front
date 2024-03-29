import { Flex, Stack, Text } from '@chakra-ui/react'
import ChatMessage from './ChatMessage';
import useChattingStore from '../stores/chatting';

function ChatMessageList(props) {

    const { chatList } = useChattingStore();

    return (
        <Flex h='85vh' overflow-y='auto' direction='column-reverse' overflowY='auto'>
            {
                chatList.slice(0).reverse().map(message => (
                    <ChatMessage
                        key={message.id}
                        message={message.message}
                        timestamp={message.timestamp}
                        isUser={message.isUser}
                    />
                ))
            }
            <Stack textAlign='left'>
            <Text
                fontSize='4xl'
                as='b'
            >
                무물보입니다 🎓
            </Text>
            <Text
                mb='50px'
            >
                모르는거 빼고 다 압니다~
            </Text>
            </Stack>

        </Flex >
    );
}

export default ChatMessageList;
