import jwt from 'jsonwebtoken';
import store from '../store';
import axios from 'axios';

export function http() {
    return axios.create({
        baseURL: store.state.apiUrl,
        headers: {
            Authorization: getToken()
        }
    });
}

export function isLoggedIn() {
    const token = localStorage.getItem('token');
    return token != null;
}

export function login(admin) {
    return http().post('/admin/signin', admin)
        .then(res => {
            if (res) {
                setToken(res.data.token);
            }
        }).catch(err =>{
            console.error(err);
            return {status:'error',msg:"Error Logging In"};
        });
}

export function logout() {
    localStorage.clear();
    store.dispatch('authenticate');
}

function setToken(token) {
    localStorage.setItem('token', token);
    store.dispatch('authenticate');
}

export function getToken() {
    return localStorage.getItem('token');
}

export function getEmail() {
    const token = decodeToken();
    if (!token) {
        return null;
    }
    return token.email;
}


function decodeToken() {
    const token = getToken();
    if (!token) {
        return null;
    }
    return jwt.decode(token);
}
