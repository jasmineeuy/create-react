const word = "Awesome";
const fun = "Tech";

const num1 = 1000;
const num2 = 100;

const person = {
  name: "Jasmine",
  location: "Houston",
  activity: ["cooking", "concert", "art"],
};

const cat = {
  color: "tan",
  numberOfKittens: 1,
  img: "https://bestfriends.org/sites/default/files/inline-images/Foster-Agave-1-byAnnika-Harley.jpg",
};

function App() {
  return (
    <div className="App">
      <h1>
        {fun} is {word}
      </h1>
      <p>
        Add: {num1} + {num2} = {num1 + num2}
      </p>
      <p>
        Subtract: {num1} + {num2} = {num1 - num2}
      </p>
      <p>
        {" "}
        Multiply: {num1} * {num2} = {num1 * num2}
      </p>
      <p>
        Divide: {num1} / {num2} = {num1 / num2}
      </p>

      <p>
        Hi! My name is {person.name} and I live in {person.location}
      </p>
      <ul>
        <li>{person.activity[0]}</li>
        <li>{person.activity[1]}</li>
        <li>{person.activity[2]}</li>
      </ul>
      <img src={cat.img} alt="img of grey cat with five kittens"></img>
      <figcaption>
        There is {cat.numberOfKittens} {cat.color} for fostering , they are cute
        and love to play
      </figcaption>
      {/* This is how to comment*/}
    </div>
  );
}

export default App;
