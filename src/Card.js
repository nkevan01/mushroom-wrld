
import './App.css';

function Card(props) {
 

  return (
  <>
    
    <div className="max-w-sm m-10 rounded overflow-hidden shadow-lg inline-block">
  <img className="w-full h-64" src={props.img} alt='#'></img>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{props.name}</div>
    <p className="text-gray-700 text-base">{props.caption}</p>
  </div>
  <div className="px-6 pt-4 pb-2">
    
  </div>
</div>
    </>
  );
  }


export default Card;
