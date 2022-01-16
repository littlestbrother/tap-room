import React from "react";
import PropTypes from "prop-types";
function Drink(props) {
  // hard coded code right here baby^^
  return (
    <React.Fragment>
      {/* Below we use arrow notation within the div to return the id of a clicked drink */}
      <div onClick={() => props.whenDrinkClicked(props.id)}>
        <h3>
          {props.name} - ${props.price}
        </h3>
        <p>
          {props.quantity > 0 ? (
            <em>{props.quantity} pints left</em>
          ) : (
            <em>out of stock</em>
          )}
        </p>
        <hr />
      </div>
    </React.Fragment>
  );
}

Drink.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  flavor: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenDrinkClicked: PropTypes.func,
};
export default Drink;
