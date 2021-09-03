import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function NeighbourItem({ code }) {

    const [codeItem, setCodeItem] = useState([]);
    useEffect(() => {

        async function fetchData() {
            const res = await fetch(`https://restcountries.eu/rest/v2/alpha/${code}`);
            const jsonData = await res.json();
            setCodeItem(jsonData);
        }

        fetchData();

    }, []);
    return (
        <div>
            <Link href="/[name]" as={`/${codeItem.name}`}>
                <img src={codeItem.flag} alt="" />
            </Link>

        </div>
        // <img src={codeItem.flag} alt="" />
        // <h1>{codeItem.name }</h1>
    )
}
