import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import NeighbourList from '../../components/NeighbourList';

export default function details({ jsonData }) {

    const details = jsonData[0];

    const getLanguage = () => {
        const arr = details.languages;
        let languages = arr[0].name;
        
        for(let i = 1; i < arr.length - 1; i++){
            languages +=  ", " + arr[i].name;
        }

        if(arr.length > 1)
        languages +=  " and " + arr[arr.length-1].name;
        
        return languages;
    }

    const router = useRouter();
    const { name } = router.query;

    console.log(details);
    // console.log(details.currencies[0].name);


    return (
        <div className="container-country">
            <h1>{details.name}</h1>
            <div className="details">
                <img src={details.flag} alt="" />
                <div>
                    <span>Native Name: {details.nativeName}</span>
                    <span>Capital: {details.capital}</span>
                    <span>Population: {details.population}</span>
                    <span>Region: {details.region}</span>
                    <span>Sub-region: {details.subregion}</span>
                    <span>Area: {details.area}</span>
                    <span>Country Code: +{details.callingCodes}</span>
                    <span>Language: {getLanguage()}</span>
                    <span>Curriencies: {details.currencies[0].name}</span>
                    <span>Timezone: {details.timezones[0]}</span>
                </div>
            </div>
            <NeighbourList code={details.borders} />    
        </div>
    );



}


export const getServerSideProps = async (context) => {
    const res = await fetch(`https://restcountries.eu/rest/v2/name/${context.params.name}?fullText=true`);
    const jsonData = await res.json()
    return {
        props: {jsonData}
    }
}