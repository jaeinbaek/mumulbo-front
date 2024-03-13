import { Box, Stack, Text, Divider} from '@chakra-ui/react'

function ChatMessage(props) {
    if (props.isUser) {
        // USER
        return (
            <Stack
                textAlign='right'
                py='5px'
                mr='10px'
            >
                <Box
                    w='100%'
                >
                    <Text fontSize='xs'>You, {props.timestamp}</Text>
                </Box>
                <Box
                    w='100%'
                >
                    <Text fontSize='m'>{props.message}</Text>
                </Box>
            </Stack>
        );
    } else {
        // Reply
        return (
            <Stack
                textAlign='left'
                py='5px'
            >
                <Box
                    w='100%'
                >
                    <Text fontSize='xs'>Reply, {props.timestamp}</Text>
                </Box>
                <Box
                    w='100%'
                >
                    <Text fontSize='m'>{props.message}</Text>
                </Box>
                <Divider />
            </Stack>
        );
    }
}

export default ChatMessage;
