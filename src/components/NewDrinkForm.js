import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewDrinkForm(props) {
  function handleNewDrinkFormSubmission(event) {
    event.preventDefault();
    props.onNewDrinkCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: parseInt(event.target.price.value),
      flavor: event.target.flavor.value,
      quantity: parseInt(event.target.quantity.value),
      id: v4(),
    });
  }
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewDrinkFormSubmission}
        buttonText="Submit"
      />
    </React.Fragment>
  );
}

NewDrinkForm.propTypes = {
  onNewDrinkCreation: PropTypes.func,
};

export default NewDrinkForm;
