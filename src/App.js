import logo from "./logo.svg";
import "./App.css";
import PlayersList from "./PlayersList";
import Image from "./Image";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import product from "./product";
function App() {
  return (
    <div>
     <Name name= {product.name}/>
     <Price price= {product.price}/>
     <Description description= {product.description}/>
     <Image image= {product.imageUrl}/>
    </div>
  );
}

export default App;
