import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <p>Name</p>
        <input type="text" name="name" placeholder="Abc" />
        <br/><br/>
        <p>Brand</p>
        <input type="text" name="brand" placeholder="Abc" />
        <br/><br/>
        <p>Price</p>
        <input type="number" name="price" placeholder="$10" min={0} />
        <br/><br/>
        <p>Flavor</p>
        <input type="text" name="flavor" placeholder="Abc" />
        <br/><br/>
        <p>Quantity (pints)</p>
        <input
          type="number"
          name="quantity"
          placeholder="1"
          min="1"
          max="124"
        />
        <br/><br/>
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;
