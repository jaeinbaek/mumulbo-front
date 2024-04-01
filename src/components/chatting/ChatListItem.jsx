import { Flex, Stack, Text, Divider } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";

function ChatListItem(props) {

    const navigate = useNavigate();

    const navigateToChat = (event) => {
        navigate(`/chatting/${props.id}`)
    }

    return (
        <Stack
            onClick={navigateToChat}
        >
            <Text fontSize='xs'>
            {props.id}
            </Text>
            <Text fontSize='md' as='b'>
            {props.title}
            </Text>
            <Divider/>
        </Stack>
    );
}

export default ChatListItem;
