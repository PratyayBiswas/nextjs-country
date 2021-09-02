import React from 'react'
import Head from 'next/head'
import styles from '../styles/Card.module.css'
// import CountryCard from './CountryCard'

const CountriesList = ({ data }) => {

    console.log(data);

    // const cardList = data.map((card) => {
    //     return(
    //         <h1>{card.name}</h1>
    //     );
    // });

    const cardList = data.map(card => {
        return (
            // <div className={styles.cardDiv}>
            //     <img src={card.flag} alt="Card image cap" />
            //     <div className="card-body">
            //         <h5 className="card-title">{card.name}</h5>
            //         <span>Currency: {card.currencies.name}</span>
            //         <span>current date and time: </span>
            //     </div>
            //     <div class="card-body">
            //     </div>
            // </div>

            <div class="card">
                <div class="card-body">
                    This is some text within a card body.
                </div>
            </div>


            // <div className="card" style="width: 18rem;">
            //     <img className="card-img-top" src="..." alt="Card image cap"/>
            //     <div className ="card-body">
            //     <p className ="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            //     </div>
            // </div>
        );
    });

    // const cardList = list.map(card => {
    //     return (
    //         <div className="card" style={{width: "18rem"}}>

    //             <img className="card-img-top" src={card.flag} alt="Card image cap" />
    //             <div className="card-body">
    //                 <h5 className="card-title">Card title</h5>
    //                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //             </div>
    //         </div>
    //     );
    // })
    return (

        <div className="list-group">
            <Head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous" />
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            </Head>
            {cardList}
        </div>
    )
};

export default CountriesList;
