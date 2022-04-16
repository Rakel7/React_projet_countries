import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Countries = () => {
    const [data, setData] = useState([]);
    const [rangeValue, setRangeValue] = useState(36);
    const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];
    const [selectedRadio, setSelectedRadioValue] = useState("");

    // UseEffect et UseState sont des hooks

    // Le useEffect se joue lorsque le composant est monté ( mis en place)
    useEffect(() => {
        axios
            .get("https://restcountries.com/v3.1/all")
            .then((res) => setData(res.data));
        //.then((res)=> console.log(res.data));  permet de vérifier qu'on recoit bien les data dans la console
    }, []);

    // [] = callback

    return (
        <div className='countries'>
            <ul className="radio-container">
                {/* permet de faire la barre de jauge */}
                <input type="range"
                    min="1" max="250"
                    defaultValue={rangeValue}
                    onChange={(e) => setRangeValue(e.target.value)} />

                {/* permet de faire les boutons radios */}
                {radios.map((continent) => (
                    <li>
                        <input type="radio" id={continent} name="continentRadio" checked={continent === selectedRadio} onChange={(e) => setSelectedRadioValue(e.target.id)} />
                        <label htmlFor={continent}>{continent}</label>
                    </li>
                ))}


            </ul>
            {selectedRadio && (<button onClick={() => setSelectedRadioValue("")}>Annuler la recherche</button>)}
            {/* Si selectedRadio est true alors tu affiche le button */}
            <ul>
                {/* est ce que country.continents[0], includes ce que l'utilisateur veut voir? Filter va laisser passer que les pays qui auront était selection par l'utilisateur */}
                {data
                    .filter((country) => country.continents[0].includes(selectedRadio))
                    // sort ici permet de trier dans l'ordre décroissant de population
                    .sort((a, b) => b.population - a.population)
                    .slice(0, rangeValue)
                    .map((country, index) =>
                        (<Card key={index} pays={country} />))
                }
                {/* .slice   permet de limiter l'affichage à un certain nombre */}
            </ul>
        </div>
    );
};

export default Countries;