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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
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
