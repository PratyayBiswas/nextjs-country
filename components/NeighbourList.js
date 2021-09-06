import NeighbourItem from './NeighbourItem';

const NeighbourList = ({ code }) => {

    const list = code.map(data => {
        return (
            <NeighbourItem key={data} code={data} />
        )
    })

    if (code.length === 0) {
        return <h1>No Neighbours</h1>
    }

    return (
        <>
            <h1>Neighbour Countries</h1>
            <div className="list-neighbour">
                {list}
            </div>
        </>
    )
};

export default NeighbourList;
