import { useEffect, useState } from 'react'
import Head from 'next/head'
import CountriesList from '../components/CountriesList'
import React from 'react'

export default function Home() {

  const [countriesList, setCountriesList] = useState([]);
  const [term, setTerm] = useState("");

  useEffect(() => {

    async function fetchData() {
      if (term === '') {
        const res = await fetch('https://restcountries.eu/rest/v2/all');
        const jsonData = await res.json();
        setCountriesList(jsonData);
      }
      else {
        const res = await fetch(`https://restcountries.eu/rest/v2/name/${term}`);
        const jsonData = await res.json();
        setCountriesList(jsonData);
      }

    }

    fetchData();


  }, [term]);

  const onSubmit = (event) => {
    if (event.key === 'Enter') {
      setTerm(event.target.value);
      // async function fetchData() {
      //   // const res = await fetch(`https://restcountries.eu/rest/v2/name/${event.target.value}?fullText=true`);
      //   const res = await fetch(`https://restcountries.eu/rest/v2/name/${event.target.value}`);
      //   console.log(res);
      //   const jsonData = await res.json();
      //   console.log(jsonData);


      // if(res.status === 200){
      //   const jsonData = await res.json();
      //   Router.push({
      //     pathname: `/${event.target.value}`
      //   });
      // }
      // else{
      //   alert("Sorry check the name");
      // }

      // console.log(res);
      // console.log(jsonData);
      // setCountriesList(jsonData);
      // }

      // fetchData();
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

      <CountriesList data={countriesList} term={term} />
    </div>

  )
}
