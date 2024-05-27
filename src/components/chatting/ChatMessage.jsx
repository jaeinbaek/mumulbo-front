import {
    Box,
    Stack,
    Text,
    Divider,
    Code,
    IconButton,
    Flex,
    useToast
} from '@chakra-ui/react'
import { CopyIcon } from '@chakra-ui/icons'

function ChatMessage(props) {
    const toast = useToast()
    // 클립보드 복사
    const handleCopyClipBoard = async () => {
        try {
            await navigator.clipboard.writeText(props.message);
            // alert('클립보드에 복사되었습니다');
            toast({
                title: '복사 성공!',
                description: "메시지 내용이 클립보드에 복사되었어요.",
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

    if (props.isUser) {
        // User
        return (
            <Stack
                textAlign='right'
                py='5px'
                mr='10px'
            >
                <Box
                    w='100%'
                >
                    <Text fontSize='xs'>
                        <Text fontSize='xs' as='b'>
                            You
                        </Text>
                        , {props.timestamp}
                    </Text>
                </Box>
                <Box
                    w='100%'
                >
                    <Text fontSize='m'>{props.message}</Text>
                </Box>
            </Stack>
        );
    } else if (!props.isUser && props.isError) {
        // Reply, Error
        return (
            <Stack
                textAlign='left'
                py='5px'
            >
                {/* Message Information */}
                <Flex
                    w='100%'
                    alignItems='center'
                    gap='2'
                >
                    <Text fontSize='xs'><Text fontSize='xs' as='b'>Information</Text>, {props.timestamp}</Text>
                    <IconButton
                        onClick={handleCopyClipBoard}
                        size='xs'
                        variant='ghost'
                        aria-label='Search database'
                        icon={<CopyIcon />}
                    />
                </Flex>
                {/* Body */}
                <Box
                    w='100%'
                >
                    <Text fontSize='m'>에러가 발생했어요 관리자에게 문의해주세요!</Text>
                    <Code mt="0.5rem" colorScheme='red' children={props.message} />
                </Box>
                <Divider mt="0.5rem" />
            </Stack>
        );
    } else if (!props.isUser && !props.isError) {
        // Reply, Not error
        return (
            <Stack
                textAlign='left'
                py='5px'
            >
                {/* Message Information */}
                <Flex
                    w='100%'
                    alignItems='center' gap='2'
                >
                    <Text fontSize='xs'><Text fontSize='xs' as='b'>Reply</Text>, {props.timestamp}</Text>
                    <IconButton
                        onClick={handleCopyClipBoard}
                        size='xs'
                        variant='ghost'
                        aria-label='Search database'
                        icon={<CopyIcon />}
                    />
                </Flex>
                {/* Body */}
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
