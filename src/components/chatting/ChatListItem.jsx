import { Flex, Spacer, Stack, Text, Divider, CloseButton } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";

import useChatListStore from '../../stores/chatList';
import useChattingStore from '../../stores/chatting';

function ChatListItem(props) {

    const navigate = useNavigate();
    const { setSelectedChat } = useChatListStore(state => state);
    const { clearChatting } = useChattingStore(state => state);

    const navigateToChat = (event) => {
        navigate(`/chatting/${props.id}`)
        setSelectedChat({ id: props.id, title: props.title })
        clearChatting();

    }

    return (
        <Stack
            onClick={navigateToChat}
            pt='1rem'
        >
            <Flex
                w='100%'
                alignItems='center'
                gap='2'
            >
                <Stack>
                    <Text fontSize='xs'>
                        {props.id}
                    </Text>
                    <Text
                        fontSize='sm'
                        as='b'
                    >
                        {props.title}
                    </Text>

                </Stack>
                <Spacer />
                <CloseButton size='sm' />
            </Flex>
            <Divider />
        </Stack>
    );
}

export default ChatListItem;
