import {
    create
} from 'zustand';
// 15분 설정
export const TOKEN_TIME_OUT = 60 * 15;
// export const TOKEN_TIME_OUT = 600 * 1000;

const useAuthStore = create((set) => ({
    authToken: {
        authenticated: true,
        // authenticated: false,
        accessToken: null,
        expireTime: null
    },
    setToken: newToken =>
        set({
            authToken: {
                authenticated: true,
                accessToken: newToken.accessToken,
                expireTime: new Date().getTime() + TOKEN_TIME_OUT
            }
        }),
    deleteToken: () =>
        set({
            authToken: {
                authenticated: false,
                accessToken: null,
                expireTime: null
            }
        }),
}));

export default useAuthStore;