import React from 'react';
export default function Card(params){
    return(
        <div className="card">
            {/* <h1>{params.Country} {params.CountryCode}</h1> */}
            <div className="Header"> 
                <img src={`https://www.countryflags.io/${params.CountryCode}/shiny/64.png`} />
                <h4> {params.Country} </h4>
            </div>
            <div className="Body">
                <h6 className="statsText">New Cases : {params.NewConfirmed}</h6>
                <h6 className="statsText">New Death : {params.NewDeaths}</h6>
                <h6 className="statsText">New Recovered : {params.NewRecovered}</h6>
                <h6 className="statsText">Total Cases : {params.TotalConfirmed}</h6>
                <h6 className="statsText">Total Deaths : {params.TotalDeaths}</h6>
                <h6 className="statsText">New Recovered : {params.TotalRecovered}</h6>
            </div>
        </div>
    )
}

// Country: "ALA Aland Islands"
// ​​​
// CountryCode: "AX"
// ​​​
// Date: "2020-04-16T13:49:34Z"
// ​​​
// NewConfirmed: 0
// ​​​
// NewDeaths: 0
// ​​​
// NewRecovered: 0
// ​​​
// Slug: "ala-aland-islands"
// ​​​
// TotalConfirmed: 0
// ​​​
// TotalDeaths: 0
// ​​​
// TotalRecovered: 0