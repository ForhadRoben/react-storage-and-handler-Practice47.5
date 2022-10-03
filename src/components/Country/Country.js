import React from 'react';
import './Country.css';

const Country = (props) => {
    // console.log(props.country);
    const { name, region, population, area, capital, flags } = props.country;
    return (
        <div className='country bg-warning'>
            <h2>Country Name:{name.common}</h2>
            <h2>Country Capital :{capital}</h2>
            <img src={flags.png} alt="" />
            <p>Population:{population}</p>
            <p>Region:{region}</p>
            <p><small>Area:{area}</small></p>

            {/* <h2>Country Name:{props.country.name.common}</h2>
            <h2>Country Official :{props.country.name.official}</h2>
            <p>Population:{props.country.population}</p>
            <p>Region:{props.country.region}</p>
            <p>Area:{props.country.area}</p> */}
        </div>
    );
};

export default Country;