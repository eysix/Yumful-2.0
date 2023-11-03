import {useEffect, useState} from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

const getLineBreaks = (text) => {
  // Split text into lines using regular expression
  const lines = text.split(/\r\n\r\n|\r\n/);

  return (
    <ol id="instructions">
      {lines.map((line, index) => (
        <li key={index}>{line}</li>
      ))}
    </ol>
  );
};

const SingleMeal = () => {
  const {id} = useParams();
  const [loading, setLoading] = useState(false);
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    setLoading(true);

    async function getMeal() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        if(data.meals) {
          const {
            strMeal: name,
            strCategory: category,
            strArea: area,
            strInstructions: instructions,
            strMealThumb: image,
            strTags: tags,
            strYoutube: video,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
            strIngredient9,
            strIngredient10,
            strMeasure1,
            strMeasure2,
            strMeasure3,
            strMeasure4,
            strMeasure5,
            strMeasure6,
            strMeasure7,
            strMeasure8,
            strMeasure9,
            strMeasure10,
          } = data.meals[0];

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
            strIngredient9,
            strIngredient10,
          ];

          const measures = [
            strMeasure1,
            strMeasure2,
            strMeasure3,
            strMeasure4,
            strMeasure5,
            strMeasure6,
            strMeasure7,
            strMeasure8,
            strMeasure9,
            strMeasure10
          ];

          const newMeal = {name, image, category, area, tags, video, instructions, ingredients, measures};
          setMeal(newMeal);
        } else {
          setMeal(null);
        }

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getMeal();
  }, [id])

  if (loading) {
    return <Loading />;
  }
  if (!meal) {
    return <h2 className='section-title'>
      no meal to display
    </h2>
  } else {
    const {name, image, category, area, tags, video, instructions, ingredients, measures} = meal;
    return (
      <>
        <div className="food-header">
          <h2 className="section-title">{name}</h2>
        </div>
        <section className="meal-section">
          <div className="foodie">
            <img src={image} alt={name} />
          </div>

          <div className="food">
            <div className="food-info">
              <p>
                <span className="food-data">Category :</span>
                {category}
              </p>
              <p>
                <span className="food-data">Cuisine :</span>
                {area}
              </p>
              {tags && (
                <p>
                  <span className="food-data">Tags :</span>
                  {tags}
                </p>
              )}
              <p>
                <span className="food-data">Ingredients :</span>
                <ul id="ingredients">
                  {ingredients.map((item, index) => {
                    return item ? <li key={index}>{measures[index]} {item}</li> : null
                  })}
                </ul>
              </p>
              <p>
                <span className="food-data">instructions :</span>
                {getLineBreaks(instructions)}
              </p>
              <p>
                <span className="food-video">
                  <a href={video} target="_blank">
                    {" "}
                    Video Link{" "}
                  </a>
                </span>
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default SingleMeal
