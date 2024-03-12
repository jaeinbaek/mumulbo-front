import { Flex, Box } from '@chakra-ui/react'

function ChatMessage(props) {

    return (
        <div>
            {
                props.messages.map(message => (
                        <Flex>
                            <Box
                                w='100%'
                                p={4}
                                color={message.isUser ? 'grey' : 'white'}
                            >
                                {message.message}
                            </Box>
                        </Flex>
                ))
            }
        </div>
    );
}

export default ChatMessage;
