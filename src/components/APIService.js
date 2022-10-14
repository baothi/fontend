
import axios from 'axios';
export default class APIService {
    
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
            .then(resp => resp.json())
            .catch(e => {
                console.log(e)
                return
            });
        }
        return add

    }
}