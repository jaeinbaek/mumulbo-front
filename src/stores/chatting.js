import { create } from 'zustand';

const useChattingStore = create((set) => ({
    chat: {
        isUser: true,
        timestamp: '',
        message: ''
    },
    setChat: newChat =>
        set({ chat: { ...newChat }}),

    chatList: [],
    pushChatList: chat =>
        set((prev) => (
            { chatList: [...prev.chatList, chat]})
        ),
}));

export default useChattingStore;