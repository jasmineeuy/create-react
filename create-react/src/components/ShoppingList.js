// It will render an unordered list and list each item in the array
// Add a ul element
// Inside the ul element, map through the items array you created above and generate li elements

function ShoppingList({ items }) {
  // destructure props to use without props.items
  return (
    <ul>
      {items.map(
        (
          item // items. map go through each item and list item
        ) => (
          <li key={item}>{item}</li>
        )
      )}
    </ul>
  );
}

export default ShoppingList;
