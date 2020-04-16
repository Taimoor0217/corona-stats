import React from 'react';
export default function Card(params){
    return(
        <div className="card">
            <h1>{params.Country} {params.CountryCode}</h1>
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