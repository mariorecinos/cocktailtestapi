import { useState } from "react";

export default function App() {
  const [mystery, setMystery] = useState([]);
  function getDrink() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => {
        setMystery(data.drinks);
      });
  }
  return (
    <div className="MysteryCocktailPage">
      <button onClick={getDrink}>Get A Drink</button>

      {mystery.map((m) => {
        const {
          idDrink,
          strDrink,
          strInstructions,
          strDrinkThumb,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
          strIngredient6,
          strMeasure1,
          strMeasure2,
          strMeasure3,
          strMeasure4,
          strMeasure5,
          strMeasure6
        } = m;
        return (
          <div key={idDrink}>
            <h1>{strDrink}</h1>
            <h2>{strInstructions}</h2>
            <h3>{strIngredient1}</h3>
            <h3>{strIngredient2}</h3>
            <h3>{strIngredient3}</h3>
            <h3>{strIngredient4}</h3>
            <h3>{strIngredient5}</h3>
            <h3>{strIngredient6}</h3>
            <h3>{strMeasure1}</h3>
            <h3>{strMeasure2}</h3>
            <h3>{strMeasure3}</h3>
            <h3>{strMeasure4}</h3>
            <h3>{strMeasure5}</h3>
            <h3>{strMeasure6}</h3>
            <img src={strDrinkThumb}></img>
          </div>
        );
      })}
    </div>
  );
}
