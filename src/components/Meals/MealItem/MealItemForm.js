import React from 'react';
import classes from './MealItemForm.module.css';

const MealItemForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.input}>
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          max="5"
          defaultValue="1"
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default MealItemForm;
