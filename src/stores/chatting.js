import {
    create
} from 'zustand';

const useChattingStore = create((set) => ({
    chat: {
        isUser: true,
        timestamp: '',
        message: ''
    },
    setChat: newChat =>
        set({
            chat: {
                ...newChat
            }
        }),
    chatList: [],
    pushChatList: chat =>
        set((prev) => ({
            chatList: [...prev.chatList, chat]
        })),
    clearChatting: () => 
        set({
            chat: {
                isUser: true,
                timestamp: '',
                message: ''
            },
            chatList: []
        }),
    chatLoading: false,
    setChatLoading: newState =>
        set(
            { chatLoading: newState }
        ),
    chatError: false,
    setChatError: newState =>
        set(
            { chatError: newState }
        ),
}));

export default useChattingStore;