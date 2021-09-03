import Link from 'next/link'

const CountriesList = ({ data }) => {

    var currentdate = new Date();
    let dateTime = "";

    var tempDate = currentdate.getDate();
    if (tempDate == '1' || tempDate == '21' || tempDate == '31')
        dateTime += tempDate + "st";
    if (tempDate === '2' || tempDate === '22')
        dateTime += tempDate + "nd";
    if (tempDate == '3' || tempDate == '23')
        dateTime += tempDate + "rd";

    const monthList = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    var tempDate = currentdate.getMonth();
    dateTime += " " + monthList[tempDate]
        + " " + currentdate.getFullYear()
        + ", " + currentdate.getHours()
        + ":" + currentdate.getMinutes();

    const cardList = data.map(card => {
        return (

            <div className="card" key={card.name}>
                <img className="card-img" src={card.flag} alt="Card image cap" />
                <div className="card-body">
                    <span className="card-title">{card.name}</span>
                    <span className="card-content">Currency: {card.currencies[0].name}</span>
                    <span className="card-content">Current date and time: {dateTime}</span>
                    <div className="btn-div">
                        <button>Show Map</button>
                        <button>
                            <Link href="/[name]" as={`/${card.name}`}>Details
                            </Link>
                        </button>
                    </div>
                </div>

            </div>
        );
    });
    return (

        <div className="list">
            {cardList}
        </div>
    )
};

export default CountriesList;
