// Add a form element and add the followings inside:
// Add a label for item name
// Add an input of type text for user to enter the item name
// Add a button of type submit

function ShoppingListForm({ handleItemNameChange, handleFormSubmit }) {
  //destructiorong props to use to target change o nninput and then submit info
  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="groceryItem">Item</label>
      <input
        type="text"
        id="groceryItem"
        name="groceryItem"
        onChange={handleItemNameChange}
      />
      <button type="Submit">Submit</button>
    </form>
  );
}

export default ShoppingListForm;
