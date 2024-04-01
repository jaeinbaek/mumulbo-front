import {
    create
} from 'zustand';

const useChatListStore = create((set) => ({
    chatList: [
        {
            id: '5A105E8B9D40E1329780D62EA2265D8A',
            title: 'test1'
        },
        {
            id: 'AD0234829205B9033196BA818F7A872B',
            title: 'test2'
        },
        {
            id: '8AD8757BAA8564DC136C1E07507F4A98',
            title: 'test3'
        },
        {
            id: '86985E105F79B95D6BC918FB45EC7727',
            title: 'test4'
        },
        {
            id: 'E3D704F3542B44A621EBED70DC0EFE13',
            title: 'test5'
        },
    ],
}));

export default useChatListStore;