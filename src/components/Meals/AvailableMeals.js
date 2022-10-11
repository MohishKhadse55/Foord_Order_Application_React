import React, { useState } from 'react';
import { useEffect } from 'react';
import classes from './AvailabelMeals.module.css';
import Card from '../UI/Card';
import MealItems from './MealItems/MealItems';

function AvailableMeals(props) {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log('fetching meals ...');
    const fetchMeals = async () => {
      const response = await fetch(
        'https://react-5614b-default-rtdb.firebaseio.com/melas.json'
      );
      const responseData = await response.json();
      console.log(responseData);
      const loadedMeals = [];
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
    };
    fetchMeals();
  }, []);

  const meallist = meals.map((meal) => (
    <MealItems
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{meallist}</ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
