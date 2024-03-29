import React from "react";
import NewDrinkForm from "./NewDrinkForm";
import DrinkList from "./DrinkList";
import DrinkDetail from "./DrinkDetail";
import EditDrinkForm from "./EditDrinkForm";

class DrinkControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainDrinkList: [],
      selectedDrink: null,
      editing: false,
    };
  }

  handleClick = () => {
    if (this.state.selectedDrink != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedDrink: null,
        editing: false,
      });
    } else {
      this.setState((prevState) => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  };

  handleAddingNewDrinkToList = (newDrink) => {
    const newMainDrinkList = this.state.mainDrinkList.concat(newDrink);
    this.setState({
      mainDrinkList: newMainDrinkList,
      formVisibleOnPage: false,
    });
  };

  handleIncrementQuantity = (id) => {
    if (this.state.mainDrinkList.length > 1) {
      const selectedDrink = this.state.mainDrinkList.filter(
        (drink) => drink.id === id
      )[0];
      if(selectedDrink.quantity > 0){
      selectedDrink.quantity--;
      const newMainDrinkList = this.state.mainDrinkList
        .filter((drink) => drink.id !== id)
        .concat(selectedDrink);
      this.setState({
        mainDrinkList: newMainDrinkList,
      })};
    } else {
      const selectedDrink = this.state.mainDrinkList.filter(
        (drink) => drink.id === id
      )[0];
      if(selectedDrink.quantity > 0){
      selectedDrink.quantity--;
      const newDrinkListArray = [];
      const changedDrinkArray = newDrinkListArray.concat(selectedDrink);
      this.setState({
        mainDrinkList: changedDrinkArray,
      })};
    }
  };

  handleQuantityRefill = (id) => {
    if (this.state.mainDrinkList.length > 1) {
      const selectedDrink = this.state.mainDrinkList.filter(
        (drink) => drink.id === id
      )[0];
      selectedDrink.quantity = Number(124);
      const newMainDrinkList = this.state.mainDrinkList
        .filter((drink) => drink.id !== id)
        .concat(selectedDrink);
      this.setState({
        mainDrinkList: newMainDrinkList,
      });
    } else {
      const selectedDrink = this.state.mainDrinkList.filter(
        (drink) => drink.id === id
      )[0];
      selectedDrink.quantity = Number(124);
      const newDrinkListArray = [];
      const changedDrinkArray = newDrinkListArray.concat(selectedDrink);
      this.setState({
        mainDrinkList: changedDrinkArray,
      });
    }
  }

  handleChangingSelectedDrink = (id) => {
    const selectedDrink = this.state.mainDrinkList.filter(
      (drink) => drink.id === id
    )[0];
    this.setState({ selectedDrink: selectedDrink });
  };

  handleDeletingDrink = (id) => {
    const newMainDrinkList = this.state.mainDrinkList.filter(
      (drink) => drink.id !== id
    );
    this.setState({
      mainDrinkList: newMainDrinkList,
      selectedDrink: null,
    });
  };

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({ editing: true });
  };

  handleEditingDrinkInList = (drinkToEdit) => {
    const editedMainDrinkList = this.state.mainDrinkList
      .filter((drink) => drink.id !== this.state.selectedDrink.id)
      .concat(drinkToEdit);
    this.setState({
      mainDrinkList: editedMainDrinkList,
      editing: false,
      selectedDrink: null,
    });
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = (
        <EditDrinkForm
          drink={this.state.selectedDrink}
          onEditDrink={this.handleEditingDrinkInList}
        />
      );
      buttonText = "Return To Drink List";
    } else if (this.state.selectedDrink != null) {
      currentlyVisibleState = (
        <DrinkDetail
          drink={this.state.selectedDrink}
          onClickingDelete={this.handleDeletingDrink}
          onClickingEdit={this.handleEditClick}
          onClickingBuy={this.handleIncrementQuantity}
          onClickingRefill={this.handleQuantityRefill}
        />
      );
      buttonText = "Return to drink list";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewDrinkForm onNewDrinkCreation={this.handleAddingNewDrinkToList} />
      );
      buttonText = "Return to drink list";
    } else {
      currentlyVisibleState = (
        <DrinkList
          drinkList={this.state.mainDrinkList}
          onDrinkSelection={this.handleChangingSelectedDrink}
        />
      );
      buttonText = "Add Drink";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default DrinkControl;
