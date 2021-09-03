import NeighbourItem from './NeighbourItem';

const NeighbourList = ({ code }) => {

    const list = code.map(data => {
        return (
            <NeighbourItem key={data} code={data} />
        )
    })
    return (
            <div className="list-neighbour">
                {list}
            </div>

    )
};

export default NeighbourList;
