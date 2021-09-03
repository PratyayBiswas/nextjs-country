import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

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
            <Link passHref="/[name]" as={`/${codeItem.name}`}>
                <img src={codeItem.flag} alt="" />
            </Link>

        </div>
    )
}
