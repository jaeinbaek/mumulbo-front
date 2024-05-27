import { Flex, Stack, Text, Editable, EditablePreview, EditableInput } from '@chakra-ui/react'
import ChatMessage from './ChatMessage';

// import useChattingStore from '../../stores/chatting';
// import useChatListStore from '../../stores/chatList';

function chatLandingPage(props) {

    // const { chatList, chatLoading } = useChattingStore();
    // const { selectedChat } = useChatListStore();

    return (
        <Flex h='85vh' overflow-y='auto' direction='column-reverse' overflowY='auto'>
            <Stack textAlign='left'>
                <Text
                    fontSize='3xl'
                    as='b'
                >
                <Editable
                    defaultValue='여기를 클릭하여 대화 이름을 정해주세요'
                >
                    <EditablePreview />
                    <EditableInput />
                </Editable>
                </Text>
                <Text
                    fontSize='xs'
                    mb='50px'
                >
                    대화 이름을 정하고 대화를 시작해보세요!
                </Text>
            </Stack>

        </Flex >
    );
}

export default chatLandingPage;
