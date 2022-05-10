import fetch from 'cross-fetch';
// import config from '../../config/config';
const BASE_URL = process.env.BASE_URL || "http://localhost:3030/";

const crossFetch = ({ endpoint, method = "GET", param = {} }) => {
    return new Promise((resolve, reject) => {
        fetch(`${BASE_URL}${endpoint}`, {
            method,
            body: JSON.stringify(param),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(result => {
                resolve(result);
            })
            .catch(err => {
                reject(err);
            });
    })
}

export default crossFetch;