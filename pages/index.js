import { useEffect, useState } from 'react'
import Head from 'next/head'
import CountriesList from '../components/CountriesList'
import React from 'react'

export default function Home() {

  const [term, setTerm] = useState("");
  const [changeTerm, setChangeTerm] = useState("");

  useEffect(() => {
    const timeId = setTimeout(() => {
      setTerm(changeTerm);
    }, 500);

    return () => {
      clearTimeout(timeId);
    };
  }, [changeTerm])

  return (

    <div className="containerDiv">

      <Head>
        <title>Countries</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>

      <h1 className="heading">Countries</h1>

      <div className="form-search">
        <input
          type="text"
          className="form-control"
          placeholder="Search countries"
          // onKeyDown={onSubmit} 
          onChange={e => setChangeTerm(e.target.value)} />
        <i className="fas fa-search"></i>
      </div>

      <CountriesList term={term} />
    </div>

  )
}
