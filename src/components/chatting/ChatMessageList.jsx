import { Flex, Stack, Text, Spinner, useToast, IconButton } from '@chakra-ui/react'
import { CopyIcon } from '@chakra-ui/icons'

import ChatMessage from './ChatMessage';

import useChattingStore from '../../stores/chatting';
import useChatListStore from '../../stores/chatList';

function ChatMessageList(props) {

    const { chatList, chatLoading } = useChattingStore();
    const { selectedChat } = useChatListStore();

    const toast = useToast()

    // 클립보드 복사
    const handleCopyClipBoard = async () => {
        try {
            await navigator.clipboard.writeText(selectedChat.id);
            // alert('클립보드에 복사되었습니다');
            toast({
                title: '복사 성공!',
                description: "채팅 ID가 클립보드에 복사되었어요.",
                status: 'success',
                position: 'bottom-right',
                duration: 3000,
                isClosable: true,
            })
        } catch (error) {
            toast({
                title: '복사 실패!',
                description: "복사 과정에서 에러가 발생했습니다.",
                status: 'error',
                position: 'bottom-right',
                duration: 3000,
                isClosable: true,
            })
        }
    };

    return (
        <Flex h='85vh' overflow-y='auto' direction='column-reverse' overflowY='auto'>
            {chatLoading ? <Spinner size='md' mb='1rem' /> : null}
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
                    fontSize='3xl'
                    as='b'
                >
                    {selectedChat.title}
                </Text>
                <Flex
                    w='100%'
                    alignItems='center' gap='2'
                    mb='50px'

                >
                    <Text
                        fontSize='xs'
                    >
                        {selectedChat.id}
                    </Text>
                    <IconButton
                        onClick={handleCopyClipBoard}
                        size='xs'
                        variant='ghost'
                        aria-label='Search database'
                        icon={<CopyIcon />}
                    />
                </Flex>
            </Stack>

        </Flex >
    );
}

export default ChatMessageList;
