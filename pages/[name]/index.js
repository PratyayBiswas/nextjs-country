import Head from 'next/head'
import CountryDetails from '../../components/CountryDetails';

const details = () => {

    // const [jsonData, setJsonData] = useState([]);
    // const [path, setPath] = useState("");

    // useEffect(() => {
    //         const route = window.location.pathname;
    //         if(route.localeCompare(path) !== 0){
    //             setPath(route);
    //             const fetchData = async () => {
    //                 const res = await fetch(`https://restcountries.eu/rest/v2/name${route}?fullText=true`);
    //                 const data = await res.json();
    //                 setJsonData(data)
    //                 console.log('calling');
    //             }
    //             fetchData();
    //         }

    //         console.log(route);
            
    // })

    // const details = jsonData[0];

    // const getLanguage = () => {
    //     const arr = details.languages;
    //     let languages = arr[0].name;

    //     for (let i = 1; i < arr.length - 1; i++) {
    //         languages += ", " + arr[i].name;
    //     }

    //     if (arr.length > 1)
    //         languages += " and " + arr[arr.length - 1].name;

    //     return languages;
    // }

    // if(jsonData.length === 0)
    // return <div>Loading</div>

    return (
        <div className="container-country">
            
            <CountryDetails />
            {/* <h1>{details.name}</h1>
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
            <div className={Style.head}>
                
                <NeighbourList code={details.borders} />
            </div>
            <div className="head"></div> */}
        </div>
    );
}

export default details;