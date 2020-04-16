import Axios from 'axios';

class Corona {
    constructor(){
        this.url = `https://api.covid19api.com/summary`
    }
    getCountries() {
        return new Promise((resolve , reject)=>{
            Axios.get(this.url)
            .then(Response=>{
                resolve(Response.data.Countries)
            })
            .catch(err=>{
                reject(err)
                // console.debug(err)
            })
        })
    }
}
export default new Corona()