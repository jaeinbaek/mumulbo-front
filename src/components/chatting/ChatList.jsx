import { Flex, IconButton, Icon, Stack, Text } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'

import ChatListItem from './ChatListItem';
import useChatListStore from '../../stores/chatList';
import useChattingStore from '../../stores/chatting';

function ChatList(props) {

    const { chatList, chatLoading } = useChatListStore();
    
    const { deleteSelectedChat } = useChatListStore(state => state);
    const { clearChatting } = useChattingStore(state => state);

    const handleAddChatButton = () => {
        deleteSelectedChat();
        clearChatting();
    }


    return (
        <Stack
            pt='1rem'
            px='1rem'
        >
            <Text
                fontSize='lg'
                as='b'
            >
                채팅목록
            </Text>
            <IconButton
                onClick={handleAddChatButton}
                icon={<Icon as={AddIcon} />}
            >
                New Chat
            </IconButton>
            <Flex
                direction='column'
                overflow-y='auto'
                overflowY='auto'
            >
                {
                    chatList.slice(0).map(chatItem => (
                        <ChatListItem
                            key={chatItem.id}
                            id={chatItem.id}
                            title={chatItem.title}
                        />
                    ))
                }
            </Flex >
        </Stack>
    );
}

export default ChatList;
