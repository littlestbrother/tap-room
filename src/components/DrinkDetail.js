import React from "react";
import PropTypes from "prop-types";
function DrinkDetail(props) {
  const { drink, onClickingDelete, onClickingBuy, onClickingRefill } = props;
  return (
    <React.Fragment>
      <h1>Drink Detail</h1>
      <h3>{drink.name} - ${drink.price}</h3>
      <h3>Flavor: {drink.flavor}</h3>
      <h3>Brand: {drink.brand}</h3>
      <em>Quantity: {drink.quantity} pints</em>
      <br/><br/>
      <button onClick={props.onClickingEdit}>Edit</button>
      <button onClick={() => onClickingDelete(drink.id)}>Delete</button>
      <button onClick={() => onClickingBuy(drink.id)}>Buy</button>
      <button onClick={() => onClickingRefill(drink.id)}>Refill</button>
      <hr />
    </React.Fragment>
  );
}
DrinkDetail.propTypes = {
  drink: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingBuy: PropTypes.func,
  onClickingRefill: PropTypes.func,
};
export default DrinkDetail;
