import { useState } from "react";

function MyComponent(props) {
  const [count, setCount] = useState(0);
  const counterUp = () => {
    setCount(count + 1);
  };
  const [inputValue, setInputValue] = useState("");
  const users = [
    { id: 1, name: "Алексей" },
    { id: 2, name: "Мария" },
    { id: 3, name: "Дмитрий" },
  ];

  return (
    <div className="my-class">
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <button onClick={counterUp}>Up</button>
      <p>count={count}</p>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>Вы ввели: {inputValue}</p>
    </div>
  );
}

export default MyComponent;
