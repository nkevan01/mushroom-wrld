import './mushroomCard.css';


function Card(props){
    return <>
    <div className="card">
        <div className='h1'><h1>{props.name}</h1></div>
        <div className='para'><p>{props.info}</p></div>
    </div>
    </>
};


    
    
    
    export default Card;