import { useEffect, useState } from 'react'
import Head from 'next/head'
import CountriesList from '../components/CountriesList'
import Router from 'next/router'
import React from 'react'

export default function Home() {

  console.log(React.version);
  const [countriesList, setCountriesList] = useState([]);

  useEffect(() => {

    async function fetchData() {
      const res = await fetch('https://restcountries.eu/rest/v2/all');
      const jsonData = await res.json();
      setCountriesList(jsonData);
    }

    fetchData();


  }, []);

  const onSubmit = (event) => {
    if (event.key === 'Enter')
    Router.push({
      pathname: `/${event.target.value}`
    })
  }

  return (

    <div className="containerDiv">

      <Head>
        <title>Countries</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>

      <h1 className="heading">Countries</h1>


      <div className="form-search">
        <input type="text" className="form-control" placeholder="Search countries" onKeyDown={onSubmit} />
        <i className="fas fa-search"></i>
      </div>

      <CountriesList data={countriesList} />
    </div>

  )
}
