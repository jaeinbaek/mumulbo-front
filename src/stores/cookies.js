import { Cookies } from 'react-cookie';

const cookies = new Cookies();

// 운영용 Refresh Token
export const setRefreshToken = (refreshToken) => {
    const today = new Date();
    const expireDate = today.setDate(today.getDate() + 7);

    return cookies.set('refresh_token', refreshToken, { 
        sameSite: 'strict', 
        path: "/", 
        expires: new Date(expireDate)
    });
};

export const getCookieToken = () => {
    return cookies.get('refresh_token');
};

export const removeCookieToken = () => {
    return cookies.remove('refresh_token', { sameSite: 'strict', path: "/" })
}

// 개발용 Token
export const setDevToken = (devToken) => {
    const today = new Date();
    const expireDate = today.setDate(today.getDate() + 7);

    return cookies.set('dev_token', devToken, { 
        sameSite: 'strict', 
        path: "/", 
        expires: new Date(expireDate)
    });
};

export const getDevToken = () => {
    return cookies.get('dev_token');
};

export const removeDevToken = () => {
    return cookies.remove('dev_token', { sameSite: 'strict', path: "/" })
}