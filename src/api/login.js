import axios from 'axios';

import useAuthStore from '../stores/auth';

export const fetchLogin = async (id, password, callback) => {
    try {
        const data = new FormData();
        data.append('username', id)
        data.append('password', password)

        await axios.post('http://1.235.192.197:8000/token', data)
            .then((response) => {
                useAuthStore.getState().setToken(response.data.access_token)
                // Navigate 실행
                callback()
            })
    } catch (e) {
        console.log(e)
    }
}

export default fetchLogin;