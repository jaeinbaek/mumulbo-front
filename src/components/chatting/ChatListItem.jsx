import { Flex, Stack, Text, Divider } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";

import useChatListStore from '../../stores/chatList';

function ChatListItem(props) {

    const navigate = useNavigate();
    const { setSelectedChat } = useChatListStore(state => state);

    const navigateToChat = (event) => {
        navigate(`/chatting/${props.id}`)
        setSelectedChat({ id: props.id, title: props.title })
    }

    return (
        <Stack
            onClick={navigateToChat}
            pt='1rem'
        >
            <Text fontSize='xs'>
                {props.id}
            </Text>
            <Text
                fontSize='sm'
                as='b'
            >
                {props.title}
            </Text>
            <Divider />
        </Stack>
    );
}

export default ChatListItem;
