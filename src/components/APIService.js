import React from 'react';
import axios from 'axios';



export default class APIService extends React.Component{
    
    static InsertArticle(body, token) {
        const url = 'https://qatestapi.site/articles/';
        const config = {     
            headers:{ 
                       'content-type': 'application/json',
                       'Authorization':`Token ${token}`
                    }
        }
        const tobody = JSON.stringify(body);
        const add =(e) => {
            axios.post(url, tobody, config)
            //.then(resp => resp.json())
            .catch(e => {
                console.log(e)
                return
            });
        }
        return add

    }

    static RegisterUser(body) {
        return fetch('https://qatestapi.site/dj-rest-auth/registration/', {
        method:'POST',
        headers: {
            'Content-Type':'application/json'
        
        },
        body:JSON.stringify(body)

        })
        .then(resp => resp.json())
    }
}