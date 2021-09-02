import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CountriesList from '../components/CountriesList'

export default function Home() {

  const [countriesList, setCountriesList] = useState([]);

  useEffect(() => {
    async function fetchData(){
      const res = await fetch('https://restcountries.eu/rest/v2/all');
      const jsonData = await res.json();
      setCountriesList(jsonData);
    }

    fetchData();
    // fetch('https://restcountries.eu/rest/v2/all')
    // .then(res => res.json())
    // .then((data) => {
    //   setCountriesList(data);
    // })
  }, []);

  // const onFetch = async (term) => {
  //   const response = await fetch('https://restcountries.eu/rest/v2/all');
  //   const json = await response.json();
  //   console.log(json);
  //   setCountriesList(json);
  // }

  
  return (
    <div>
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>

      <div className="container">

        <h1>Countries</h1>

        <div className="form-group has-search">
          <span className="fa fa-search form-control-feedback"></span>
          <input type="text" className="form-control" placeholder="Search countries" />
        </div>

        <CountriesList data={countriesList} />
      </div>
    </div>
  )
}
