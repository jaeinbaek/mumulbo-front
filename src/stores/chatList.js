import {
    create
} from 'zustand';

const useChatListStore = create((set) => ({
    selectedChat: {
        id: '',
        title: ''
    },
    setSelectedChat: newState =>
        set({
            selectedChat: {
                id: newState.id,
                title: useChatListStore.getState().chatList.find((item) => item.id == newState.id).title
            }
        }),
    deleteSelectedChat: () =>
        set({
            selectedChat: {
                id: '',
                title: ''
            }
        }),
    chatList: [{
            id: '5A105E8B9D40E1329780D62EA2265D8A',
            title: 'Chatting 1'
        },
        {
            id: 'AD0234829205B9033196BA818F7A872B',
            title: 'Chatting 2'
        },
        {
            id: '8AD8757BAA8564DC136C1E07507F4A98',
            title: 'Chatting 3'
        },
        {
            id: '86985E105F79B95D6BC918FB45EC7727',
            title: 'Chatting 4'
        },
        {
            id: 'E3D704F3542B44A621EBED70DC0EFE13',
            title: 'Chatting 5'
        },
    ],
}));

export default useChatListStore;