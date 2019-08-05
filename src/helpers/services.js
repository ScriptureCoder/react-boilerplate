import { API } from "../config";

const auth = localStorage.getItem('xse-auth');

export function Post(path,data) {
    return new Promise((resolve, reject) =>{
        fetch(API+path, {
            method: 'POST',
            headers: auth?{
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer"+" "+auth
            }:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((res) => {
                resolve(res);
            })
            .catch((error) => {
                console.log(error);
            });


    });
}

export function Get(path) {
    return new Promise((resolve, reject) =>{

        fetch(API+path, {
            method: 'GET',
            headers: auth?{
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer"+" "+auth
            }:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((res) => {
                resolve(res);
            })
            .catch((error) => {
                console.log(error);
            });


    });
}
