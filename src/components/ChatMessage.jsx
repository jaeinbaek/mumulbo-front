import { Box, Stack, Text, Divider, Spinner } from '@chakra-ui/react'


function ChatMessage(props) {
    // 클립보드 복사
    const handleCopyClipBoard = async (text) => {
        try {
          await navigator.clipboard.writeText(text);
          
          alert('복사 성공!');
        } catch (error) {
          alert('복사 실패!');
        }
      };

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
                    <Text fontSize='xs'><Text fontSize='xs' as='b'>You</Text>, {props.timestamp}</Text>
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
                    <Text fontSize='xs'><Text fontSize='xs' as='b'>Reply</Text>, {props.timestamp}</Text>
                </Box>
                <Box
                    w='100%'
                >
                    <Text fontSize='m'>{props.message}</Text>
                </Box>
                {/* <IconButton aria-label='Search database' icon={<SearchIcon />} /> */}
                <Divider />
            </Stack>
        );
    }
}

export default ChatMessage;
