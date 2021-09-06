import { useEffect, useState } from 'react'
import Head from 'next/head'
import CountriesList from '../components/CountriesList'
import React from 'react'

export default function Home() {

  const [term, setTerm] = useState("");

  const onSubmit = (event) => {
    if (event.key === 'Enter') {
      setTerm(event.target.value);
    }
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

      <CountriesList  term={term}  />
    </div>

  )
}
