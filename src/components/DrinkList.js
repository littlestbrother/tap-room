import React from "react";
import Drink from "./Drink";
import PropTypes from "prop-types";

function DrinkList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.drinkList.map((drink) => (
        <Drink
          whenDrinkClicked={props.onDrinkSelection} //DrinkControl passes the handleChangingSelectedDrink method using onDrinkSelction prop
          name={drink.name}
          brand={drink.brand}
          price={drink.price}
          flavor={drink.flavor}
          quantity={drink.quantity}
          id={drink.id} //we include id because key cant be pssed as a prop to a child component
          key={drink.id}
        />
      ))}
    </React.Fragment>
  );
}

DrinkList.propTypes = {
  drinkList: PropTypes.array,
  onDrinkSelection: PropTypes.func,
};
export default DrinkList;
