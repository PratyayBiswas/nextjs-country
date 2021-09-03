import React from 'react'
import Link from 'next/link'

const CountriesList = ({ data }) => {

    console.log(data);

    const cardList = data.map(card => {
        return (

            <div className="card" key={card.name}>
                <img className="card-img" src={card.flag} alt="Card image cap" />
                <div className="card-body">
                    <span className="card-title">{card.name}</span>
                    <span className="card-content">Currency: {card.currencies[0].name}</span>
                    <span className="card-content">current date and time: </span>
                    <div className="btn-div">
                        <button>Show Map</button>
                        <button>
                            <Link href="/[name]" as={`/${card.name}`}>Details
                            </Link>
                            </button>
                    </div>
                </div>

            </div>
        );
    });
    return (

        <div className="list">
            {cardList}
        </div>
    )
};

export default CountriesList;
