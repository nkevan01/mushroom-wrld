import Card from './Card.js';
import './App.css';

import image1 from './pics/lions-mane.jpg';
import image2 from './pics/Cordyceps.jpg';
import image3 from './pics/Turkey-Tail.jpg';
import image4 from './pics/Chaga.jpg';
function Medicinal(props) {
 

  return (
    <>
    <div className=" p-6 w-1/2 font-semibold text-3xl border-t-2 border-solid border-black" >Medicinal Mushrooms <button onClick='' className='w-auto  h-auto rounded border-2 shadow-lg  p-5 m-5 text-center '>Expand</button></div>
    <Card img={image1} name='Lions Mane' caption='Hericium erinaceus is an edible mushroom belonging to the tooth fungus group. Native to North America, Europe and Asia, it can be identified by its long spines, occurrence on hardwoods, and tendency to grow a single clump of dangling spines. The fruit bodies can be harvested for culinary use.'/>
    <Card img={image2} name='Cordyceps' caption='Cordyceps is a genus of ascomycete fungi that includes about 600 species. Most Cordyceps species are endoparasitoids, parasitic mainly on insects and other arthropods; a few are parasitic on other fungi.'/>
    <Card img={image3} name='Turkey Tail' caption='Trametes versicolor – also known as Coriolus versicolor and Polyporus versicolor – is a common polypore mushroom found throughout the world. Meaning of several colors versicolor reliably describes this fungus that displays a variety of colors.'/>
    <Card img={image4} name='Chaga' caption='Inonotus obliquus, commonly called chaga, is a fungus in the family Hymenochaetaceae. It is parasitic on birch and other trees. The sterile conk is irregularly formed and resembles burnt charcoal.'/>
    
    </>
  );
  }


export default Medicinal;
