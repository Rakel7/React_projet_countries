import React from 'react';

const Card = ({pays}) => {
    return (
        <li className="card">
            <img src={pays.flags.svg} alt={"drapeau" + pays.translations.fra.common}></img>
            <div className="infos">
                <h2>{pays.translations.fra.common}</h2>
                <h4>{pays.capital}</h4>
                <p>Pop. {pays.population.toLocaleString()}</p>
                {/* le toLocaleString() permet de séparer les millier */}
            </div>
        </li>
    );
};

export default Card;