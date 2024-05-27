import axios from 'axios';

import useAuthStore from '../stores/auth';

export const fetchLogin = async (id, password, callback) => {
    try {
        // 인증정보 객체
        const data = new FormData();
        data.append('username', id)
        data.append('password', password)

        await axios.post('http://1.235.192.197:8000/token', data)
            .then((response) => {
                useAuthStore.getState().setToken(response.data.access_token)
                // console.log(useAuthStore.getState().setToken(response.data.refresh_token))
                // Navigate 실행
                callback()
            })
    } catch (e) {
        console.log(e)
    }
}

export default fetchLogin;