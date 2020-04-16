import Axios from 'axios';

class Corona {
    constructor(){
        this.url = `https://api.covid19api.com/summary`
    }
    getCountries() {
        return new Promise((resolve , reject)=>{
           const arr = [
               {
                Country: "ALA Aland Islands",
                CountryCode: "AX"
                ,Date: "2020-04-16T13:49:34Z"
                ,NewConfirmed: 0
                ,NewDeaths: 0
                ,NewRecovered: 0
                ,Slug: "ala-aland-islands"
                ,TotalConfirmed: 0
                ,TotalDeaths: 0
                ,TotalRecovered: 0
               },
                {
                Country: "ALA Aland Islands",
                CountryCode: "AX"
                ,Date: "2020-04-16T13:49:34Z"
                ,NewConfirmed: 0
                ,NewDeaths: 0
                ,NewRecovered: 0
                ,Slug: "ala-aland-islands"
                ,TotalConfirmed: 0
                ,TotalDeaths: 0
                ,TotalRecovered: 0
               },
               {
                Country: "ALA Aland Islands",
                CountryCode: "AX"
                ,Date: "2020-04-16T13:49:34Z"
                ,NewConfirmed: 0
                ,NewDeaths: 0
                ,NewRecovered: 0
                ,Slug: "ala-aland-islands"
                ,TotalConfirmed: 0
                ,TotalDeaths: 0
                ,TotalRecovered: 0
               },{
                Country: "ALA Aland Islands",
                CountryCode: "AX"
                ,Date: "2020-04-16T13:49:34Z"
                ,NewConfirmed: 0
                ,NewDeaths: 0
                ,NewRecovered: 0
                ,Slug: "ala-aland-islands"
                ,TotalConfirmed: 0
                ,TotalDeaths: 0
                ,TotalRecovered: 0
               },{
                Country: "ALA Aland Islands",
                CountryCode: "AX"
                ,Date: "2020-04-16T13:49:34Z"
                ,NewConfirmed: 0
                ,NewDeaths: 0
                ,NewRecovered: 0
                ,Slug: "ala-aland-islands"
                ,TotalConfirmed: 0
                ,TotalDeaths: 0
                ,TotalRecovered: 0
               },{
                Country: "ALA Aland Islands",
                CountryCode: "AX"
                ,Date: "2020-04-16T13:49:34Z"
                ,NewConfirmed: 0
                ,NewDeaths: 0
                ,NewRecovered: 0
                ,Slug: "ala-aland-islands"
                ,TotalConfirmed: 0
                ,TotalDeaths: 0
                ,TotalRecovered: 0
               },{
                Country: "ALA Aland Islands",
                CountryCode: "AX"
                ,Date: "2020-04-16T13:49:34Z"
                ,NewConfirmed: 0
                ,NewDeaths: 0
                ,NewRecovered: 0
                ,Slug: "ala-aland-islands"
                ,TotalConfirmed: 0
                ,TotalDeaths: 0
                ,TotalRecovered: 0
               },{
                Country: "ALA Aland Islands",
                CountryCode: "AX"
                ,Date: "2020-04-16T13:49:34Z"
                ,NewConfirmed: 0
                ,NewDeaths: 0
                ,NewRecovered: 0
                ,Slug: "ala-aland-islands"
                ,TotalConfirmed: 0
                ,TotalDeaths: 0
                ,TotalRecovered: 0
               },{
                Country: "ALA Aland Islands",
                CountryCode: "AX"
                ,Date: "2020-04-16T13:49:34Z"
                ,NewConfirmed: 0
                ,NewDeaths: 0
                ,NewRecovered: 0
                ,Slug: "ala-aland-islands"
                ,TotalConfirmed: 0
                ,TotalDeaths: 0
                ,TotalRecovered: 0
               },{
                Country: "ALA Aland Islands",
                CountryCode: "AX"
                ,Date: "2020-04-16T13:49:34Z"
                ,NewConfirmed: 0
                ,NewDeaths: 0
                ,NewRecovered: 0
                ,Slug: "ala-aland-islands"
                ,TotalConfirmed: 0
                ,TotalDeaths: 0
                ,TotalRecovered: 0
               },{
                Country: "ALA Aland Islands",
                CountryCode: "AX"
                ,Date: "2020-04-16T13:49:34Z"
                ,NewConfirmed: 0
                ,NewDeaths: 0
                ,NewRecovered: 0
                ,Slug: "ala-aland-islands"
                ,TotalConfirmed: 0
                ,TotalDeaths: 0
                ,TotalRecovered: 0
               },{
                Country: "ALA Aland Islands",
                CountryCode: "AX"
                ,Date: "2020-04-16T13:49:34Z"
                ,NewConfirmed: 0
                ,NewDeaths: 0
                ,NewRecovered: 0
                ,Slug: "ala-aland-islands"
                ,TotalConfirmed: 0
                ,TotalDeaths: 0
                ,TotalRecovered: 0
               },{
                Country: "ALA Aland Islands",
                CountryCode: "AX"
                ,Date: "2020-04-16T13:49:34Z"
                ,NewConfirmed: 0
                ,NewDeaths: 0
                ,NewRecovered: 0
                ,Slug: "ala-aland-islands"
                ,TotalConfirmed: 0
                ,TotalDeaths: 0
                ,TotalRecovered: 0
               },{
                Country: "ALA Aland Islands",
                CountryCode: "AX"
                ,Date: "2020-04-16T13:49:34Z"
                ,NewConfirmed: 0
                ,NewDeaths: 0
                ,NewRecovered: 0
                ,Slug: "ala-aland-islands"
                ,TotalConfirmed: 0
                ,TotalDeaths: 0
                ,TotalRecovered: 0
               },{
                Country: "ALA Aland Islands",
                CountryCode: "AX"
                ,Date: "2020-04-16T13:49:34Z"
                ,NewConfirmed: 0
                ,NewDeaths: 0
                ,NewRecovered: 0
                ,Slug: "ala-aland-islands"
                ,TotalConfirmed: 0
                ,TotalDeaths: 0
                ,TotalRecovered: 0
               },{
                Country: "ALA Aland Islands",
                CountryCode: "AX"
                ,Date: "2020-04-16T13:49:34Z"
                ,NewConfirmed: 0
                ,NewDeaths: 0
                ,NewRecovered: 0
                ,Slug: "ala-aland-islands"
                ,TotalConfirmed: 0
                ,TotalDeaths: 0
                ,TotalRecovered: 0
               },{
                Country: "ALA Aland Islands",
                CountryCode: "AX"
                ,Date: "2020-04-16T13:49:34Z"
                ,NewConfirmed: 0
                ,NewDeaths: 0
                ,NewRecovered: 0
                ,Slug: "ala-aland-islands"
                ,TotalConfirmed: 0
                ,TotalDeaths: 0
                ,TotalRecovered: 0
               },{
                Country: "ALA Aland Islands",
                CountryCode: "AX"
                ,Date: "2020-04-16T13:49:34Z"
                ,NewConfirmed: 0
                ,NewDeaths: 0
                ,NewRecovered: 0
                ,Slug: "ala-aland-islands"
                ,TotalConfirmed: 0
                ,TotalDeaths: 0
                ,TotalRecovered: 0
               },{
                Country: "ALA Aland Islands",
                CountryCode: "AX"
                ,Date: "2020-04-16T13:49:34Z"
                ,NewConfirmed: 0
                ,NewDeaths: 0
                ,NewRecovered: 0
                ,Slug: "ala-aland-islands"
                ,TotalConfirmed: 0
                ,TotalDeaths: 0
                ,TotalRecovered: 0
               },{
                Country: "ALA Aland Islands",
                CountryCode: "AX"
                ,Date: "2020-04-16T13:49:34Z"
                ,NewConfirmed: 0
                ,NewDeaths: 0
                ,NewRecovered: 0
                ,Slug: "ala-aland-islands"
                ,TotalConfirmed: 0
                ,TotalDeaths: 0
                ,TotalRecovered: 0
               },{
                Country: "ALA Aland Islands",
                CountryCode: "AX"
                ,Date: "2020-04-16T13:49:34Z"
                ,NewConfirmed: 0
                ,NewDeaths: 0
                ,NewRecovered: 0
                ,Slug: "ala-aland-islands"
                ,TotalConfirmed: 0
                ,TotalDeaths: 0
                ,TotalRecovered: 0
               },{
                Country: "ALA Aland Islands",
                CountryCode: "AX"
                ,Date: "2020-04-16T13:49:34Z"
                ,NewConfirmed: 0
                ,NewDeaths: 0
                ,NewRecovered: 0
                ,Slug: "ala-aland-islands"
                ,TotalConfirmed: 0
                ,TotalDeaths: 0
                ,TotalRecovered: 0
               },{
                Country: "ALA Aland Islands",
                CountryCode: "AX"
                ,Date: "2020-04-16T13:49:34Z"
                ,NewConfirmed: 0
                ,NewDeaths: 0
                ,NewRecovered: 0
                ,Slug: "ala-aland-islands"
                ,TotalConfirmed: 0
                ,TotalDeaths: 0
                ,TotalRecovered: 0
               },{
                Country: "ALA Aland Islands",
                CountryCode: "AX"
                ,Date: "2020-04-16T13:49:34Z"
                ,NewConfirmed: 0
                ,NewDeaths: 0
                ,NewRecovered: 0
                ,Slug: "ala-aland-islands"
                ,TotalConfirmed: 0
                ,TotalDeaths: 0
                ,TotalRecovered: 0
               },{
                Country: "ALA Aland Islands",
                CountryCode: "AX"
                ,Date: "2020-04-16T13:49:34Z"
                ,NewConfirmed: 0
                ,NewDeaths: 0
                ,NewRecovered: 0
                ,Slug: "ala-aland-islands"
                ,TotalConfirmed: 0
                ,TotalDeaths: 0
                ,TotalRecovered: 0
               },{
                Country: "ALA Aland Islands",
                CountryCode: "AX"
                ,Date: "2020-04-16T13:49:34Z"
                ,NewConfirmed: 0
                ,NewDeaths: 0
                ,NewRecovered: 0
                ,Slug: "ala-aland-islands"
                ,TotalConfirmed: 0
                ,TotalDeaths: 0
                ,TotalRecovered: 0
               },{
                Country: "ALA Aland Islands",
                CountryCode: "AX"
                ,Date: "2020-04-16T13:49:34Z"
                ,NewConfirmed: 0
                ,NewDeaths: 0
                ,NewRecovered: 0
                ,Slug: "ala-aland-islands"
                ,TotalConfirmed: 0
                ,TotalDeaths: 0
                ,TotalRecovered: 0
               },{
                Country: "ALA Aland Islands",
                CountryCode: "AX"
                ,Date: "2020-04-16T13:49:34Z"
                ,NewConfirmed: 0
                ,NewDeaths: 0
                ,NewRecovered: 0
                ,Slug: "ala-aland-islands"
                ,TotalConfirmed: 0
                ,TotalDeaths: 0
                ,TotalRecovered: 0
               },{
                Country: "ALA Aland Islands",
                CountryCode: "AX"
                ,Date: "2020-04-16T13:49:34Z"
                ,NewConfirmed: 0
                ,NewDeaths: 0
                ,NewRecovered: 0
                ,Slug: "ala-aland-islands"
                ,TotalConfirmed: 0
                ,TotalDeaths: 0
                ,TotalRecovered: 0
               },{
                Country: "ALA Aland Islands",
                CountryCode: "AX"
                ,Date: "2020-04-16T13:49:34Z"
                ,NewConfirmed: 0
                ,NewDeaths: 0
                ,NewRecovered: 0
                ,Slug: "ala-aland-islands"
                ,TotalConfirmed: 0
                ,TotalDeaths: 0
                ,TotalRecovered: 0
               },{
                Country: "ALA Aland Islands",
                CountryCode: "AX"
                ,Date: "2020-04-16T13:49:34Z"
                ,NewConfirmed: 0
                ,NewDeaths: 0
                ,NewRecovered: 0
                ,Slug: "ala-aland-islands"
                ,TotalConfirmed: 0
                ,TotalDeaths: 0
                ,TotalRecovered: 0
               },{
                Country: "ALA Aland Islands",
                CountryCode: "AX"
                ,Date: "2020-04-16T13:49:34Z"
                ,NewConfirmed: 0
                ,NewDeaths: 0
                ,NewRecovered: 0
                ,Slug: "ala-aland-islands"
                ,TotalConfirmed: 0
                ,TotalDeaths: 0
                ,TotalRecovered: 0
               },{
                Country: "ALA Aland Islands",
                CountryCode: "AX"
                ,Date: "2020-04-16T13:49:34Z"
                ,NewConfirmed: 0
                ,NewDeaths: 0
                ,NewRecovered: 0
                ,Slug: "ala-aland-islands"
                ,TotalConfirmed: 0
                ,TotalDeaths: 0
                ,TotalRecovered: 0
               },{
                Country: "ALA Aland Islands",
                CountryCode: "AX"
                ,Date: "2020-04-16T13:49:34Z"
                ,NewConfirmed: 0
                ,NewDeaths: 0
                ,NewRecovered: 0
                ,Slug: "ala-aland-islands"
                ,TotalConfirmed: 0
                ,TotalDeaths: 0
                ,TotalRecovered: 0
               },{
                Country: "ALA Aland Islands",
                CountryCode: "AX"
                ,Date: "2020-04-16T13:49:34Z"
                ,NewConfirmed: 0
                ,NewDeaths: 0
                ,NewRecovered: 0
                ,Slug: "ala-aland-islands"
                ,TotalConfirmed: 0
                ,TotalDeaths: 0
                ,TotalRecovered: 0
               },{
                Country: "ALA Aland Islands",
                CountryCode: "AX"
                ,Date: "2020-04-16T13:49:34Z"
                ,NewConfirmed: 0
                ,NewDeaths: 0
                ,NewRecovered: 0
                ,Slug: "ala-aland-islands"
                ,TotalConfirmed: 0
                ,TotalDeaths: 0
                ,TotalRecovered: 0
               },
           ]
           resolve(arr)
            // Axios.get(this.url)
            // .then(Response=>{
            //     resolve(Response.data.Countries)
            // })
            .catch(err=>{
                reject(err)
                // console.debug(err)
            })
        })
    }
}
export default new Corona()