import Header from './Components/Header.js';
import Card from './Components/mushroomCard.js';
import './Components/mushroomCard.css';
import './Components/Header.css';

function App() {
  const mushrooms = [    
    {
    imgFile: './Resources/reishi.jpg',
    name :"Reishi",
    info : "Reishi mushrooms are among several medicinal mushrooms that have been used for hundreds of years, mainly in Asian countries, for treatment of infections. More recently, they have also been used in the treatment of pulmonary diseases and cancer. Medicinal mushrooms have been approved adjuncts to standard cancer treatments in Japan and China for more than 30 years and have an extensive clinical history of safe use as single agents or combined with chemotherapy."
    },
    {
        imgFile:"",
        name:"Chicken of the woods",
        info:"One can easily spot the chicken of the woods mushroom by its impressive size and vibrant yellow-orange colors. This large polypore has surprised many a nature lover the first time they found it! Yet, did you know they’re also edible and considered a delicacy in many parts of the world?",

    },
    {
        imgFile:"",
        name:"Portobello",
        info:"Agaricus bisporus is an edible basidiomycete mushroom native to grasslands in Europe and North America. It has two color states while immature – white and brown – both of which have various names, with additional names for the mature state.",

    },
    {
        imgFile:"",
        name:"Maitaki",
        info:"Maitake (Grifola frondose) is a type of mushroom. It forms large clumps on tree stumps and tree roots. It was first used in Asian traditional medicine. Maitake mushroom grows in forests in Asia, Europe, and eastern North America.",

    },
];
  return (
    <>
    <Header/>
    <Card  name={mushrooms[0].name} info={mushrooms[0].info} />
    <Card  name={mushrooms[1].name} info={mushrooms[1].info}/>
    <Card  name={mushrooms[2].name} info={mushrooms[2].info}/>
    <Card  name={mushrooms[3].name} info={mushrooms[3].info}/>
    



    </>
    );
};

export default App;
