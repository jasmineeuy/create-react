import users from "./users.json";
import todos from "./todos.json";
console.log(users);
console.log(todos);

const greeting = "Welcome to React";
const user = "Cohort 2024";

function App() {
  return (
    <div className="App">
      <h1>
        {greeting} {user}
      </h1>
      <Users />
      <Todos />
    </div>
  );
}

//create two functional components Users and TODOS

// For each user
// Their name in a <h3> element
// The text "Email:" and their email in an anchor element (<a>). Use the proper attribute for emails
// The text "Address:" and their address in an <address> element
// Have the street address and suite number in one line and city and zipcode in another line
// The text "Company:" and their company name and catchphrase
function Users() {
  return (
    <div>
      <h2>Users</h2>
      {users.map((user) => (
        <div>
          <h3 key={user.name}>{user.name}</h3>
          <p>
            Email:
            <a href={`mailto:${user.email}`}>{user.email}</a>
          </p>
          <p>Address:</p>
          <address>
            <p>
              {user.address.street} {user.address.suite}
            </p>
            <p>
              {user.address.city} {user.address.zipcode}
            </p>
          </address>
          <p>Company:</p>
          <p>{user.company.name}</p>
          <p>{user.company.catchPhrase}</p>
        </div>
      ))}
    </div>
  );
}

//  A title for the whole component using an <h2> element
// For each todo
// The title of the todo
// The text "Completed" if the value of the complete field is true, the text "In progress" otherwise.

function Todos() {
  return (
    <div>
      <h2>Todo</h2>
      {todos.map((todo) => (
        <div>
          <p>Item: {todo.title}</p>
          <p>Status:{todo.completed ? "Completed" : "In progress"}</p>
        </div>
      ))}
    </div>
  );
}
export default App;
