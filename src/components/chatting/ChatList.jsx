import { Flex, Stack, Text, Container } from '@chakra-ui/react'

import ChatListItem from './ChatListItem';
import useChatListStore from '../../stores/chatList';

function ChatList(props) {

    const { chatList, chatLoading } = useChatListStore();

  
    return (
        <Flex direction='column' overflow-y='auto' overflowY='auto'>
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
    );
}

export default ChatList;
