// # Create an array of strings named "items" at the top of the page before App component. Each string is an item in your shopping list. Build at least 3 items.
import ShoppingListForm from "./components/ShoppingListForm";
import ShoppingList from "./components/ShoppingList";
const items = [
  "mango",
  "ice",
  "chocolate",
  "cheese",
  "cookie",
  "berry",
  "taco",
  "corn",
];
console.log(items);

function App() {
  //handler functions to pass onto ShoppingListForm and ShoppingList via props
  //   handleItemNameChange: Bind to input's onChange event
  // handleFormSubmit: Bind to form's onSubmit event
  // For each of these functions, add a parameter of event and just print the event to the console for now

  const handleItemNameChange = (event) => {
    console.log(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.groceryItem.value);
  };
  return (
    <div className="App">
      <h1>Shopping List</h1>
      <ShoppingListForm
        handleItemNameChange={handleItemNameChange}
        handleFormSubmit={handleFormSubmit}
      />
      <ShoppingList items={items} />
      {/*pass in data props to shopping list to use in shopping list component*/}
    </div>
  );
}

export default App;
