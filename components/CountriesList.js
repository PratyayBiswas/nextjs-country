import Link from 'next/link'
import { useEffect, useState } from 'react'


const CountriesList = ({ term }) => {

    const [data, setData] = useState([]);
    const [flag, setFlag] = useState(true);


    useEffect(() => {

        async function fetchData() {
            if (term === '') {
                const res = await fetch('https://restcountries.eu/rest/v2/all');
                const jsonData = await res.json();
                setData(jsonData);
                setFlag(true);
            }
            else {
                const res = await fetch(`https://restcountries.eu/rest/v2/name/${term}`);

                if (res.status === 200) {
                    const jsonData = await res.json();
                    setData(jsonData);
                    setFlag(true);

                }
                else {
                    console.log('ERROR');
                    setFlag(false);
                }
            }
        }

        fetchData();
        console.log("RENDERED");

    }, [term]);

    const dateTime = (inp) => {

        var d = new Date();
        var utc = d.getTime() + (d.getTimezoneOffset() * 60000)

        var dateTime = "";
        var offset = 0;

        if (inp.length > 3) {
            var offset = (parseInt(inp.substring(4, 6)) * 60)
                + parseInt(inp.substring(7));

            if (inp.substring(3, 4) === '-')
                offset = - offset;

        }

        var nd = new Date(utc + (60000 * offset));

        const monthList = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        var tempDate = nd.getDate();
        if (tempDate == '1' || tempDate == '21' || tempDate == '31')
            dateTime += tempDate + "st";
        else if (tempDate === '2' || tempDate === '22')
            dateTime += tempDate + "nd";
        else if (tempDate == '3' || tempDate == '23')
            dateTime += tempDate + "rd";
        else
            dateTime += tempDate + "th";

        var tempDate = nd.getMonth();

        dateTime = dateTime
            + " " + monthList[tempDate]
            + " " + nd.getFullYear()
            + ", " + ((nd.getHours().toString().length === 1) ? "0" + nd.getHours() : nd.getHours())
            + ":" + ((nd.getMinutes().toString().length === 1) ? "0" + nd.getMinutes() : nd.getMinutes());

        return dateTime;
    }

    const zIndex = (number) => {
        if (number === null)
            return 17;

        var num = 17 - (Math.log(number) / Math.log(4));
        return num.toFixed(2);
    }

    let arr = [];

    const cardList = data.map((card) => {

        arr.push(card.area);

        return (

            <div className="card" key={card.name}>
                <img className="card-img" src={card.flag} alt="Card image cap" />
                <div className="card-body">
                    <span className="card-title">{card.name}</span>
                    <span className="card-content">Currency: {card.currencies[0].name}</span>
                    <span className="card-content">Current date and time: {dateTime(card.timezones[0])}</span>
                    <div className="btn-div">
                        <a href={`https://www.google.com/maps/@${card.latlng[0]},${card.latlng[1]},${zIndex(card.area)}z`}>
                            <button>Show Map</button>
                        </a>

                        <Link href="/[name]" as={`/${card.name}`}>
                            <button>Details</button>
                        </Link>
                    </div>
                </div>

            </div>
        );
    });

    if (!flag) {
        return <div><h2 style={{ color: 'red' }}>Result not found!</h2></div>
    }
    return (

        <div className="list">
            {cardList}
        </div>
    )
};

export default CountriesList;
