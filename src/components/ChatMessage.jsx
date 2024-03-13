import { Flex, Box, Stack, Text, Divider} from '@chakra-ui/react'

function ChatMessage(props) {
    if (props.isUser) {
        // USER
        return (
            <Stack
                textAlign='left'
                py='4'
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
                py='4'
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
            </Stack>
        );
    }
}

export default ChatMessage;
