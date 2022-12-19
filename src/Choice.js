// imports
import React from 'react';
import './index.css';
import Card from './Card.js';
import './App.css';




// images 
import img1 from './pics/portobello-mushrooms.jpg';
import img2 from './pics/reishi-mushrooms.jpg';
import img3 from './pics/Shiitake.jpg';
import img4 from './pics/white-button.jpg';
import img5 from './pics/cremini-mushrooms.jpg';
//import img6 from './Cordyceps.jpg';

function Choice(props) {
 

  return (
  <>
    <div className=" p-20 w-full font-semibold text-3xl " >Choice mushrooms are the delacacies of the mushroom world mostly known for the meatyness vegans love for substitute meat dishes.</div>
    <Card img={img1} name='Portobello' caption='Portabella mushrooms contain non-nutritive compounds like polysaccharides, polyphenols, and carotenoids, which may have anti-inflammatory, antioxidant, and anticancer properties. In animal studies, mushrooms have been shown to stimulate immune cells and stop the growth and spread of cancer cells.'/>
    <Card img={img2} name='Reishi' caption='Lingzhi, Ganoderma lingzhi, also known as reishi, is a polypore fungus native to East Asia belonging to the genus Ganoderma. Its reddish brown varnished kidney-shaped cap with bands and peripherally inserted stem gives it a distinct fan-like appearance. When fresh, the lingzhi is soft, cork-like, and flat.'/>
    <Card img={img3} name='Shiitake' caption='The shiitake is an edible mushroom native to East Asia, which is now cultivated and consumed around the globe. It is considered a medicinal mushroom in some forms of traditional medicine.'/>
    <Card img={img4} name='White Button' caption='Agaricus bisporus is an edible basidiomycete mushroom native to grasslands in Eurasia and North America. It has two color states while immature – white and brown – both of which have various names, with additional names for the mature state.'/>
    <Card img={img5} name='Cemini' caption='Cremini mushrooms are simply the slightly more mature version of the common white button mushroom. You might see them referred to as brown mushrooms, Italian mushrooms, or baby bella mushrooms. But all of these names refer to the same thing; namely, cremini mushrooms.'/>
    
    </>
  );
  }


export default Choice;
