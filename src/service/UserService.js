import axios from 'axios';
import store from '../store';

export function http() {
    return axios.create({
        baseURL: store.state.apiUrl,
    });
}

export function subscribeService(user) {
    return http().post('/user', user)
        .then(res => {
            return res;
        }).catch(err =>{
            console.error(err);
            return {status:'error',msg:"Error Subscribing"};
        });
}