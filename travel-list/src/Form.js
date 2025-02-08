import { useState } from "react";

export default function Form({addItem}) {
  const [description, setDescribtion] = useState("");
  const [quantity, setQuantity] = useState(0);

  function handleAdd(e) {
    e.preventDefault();
    const newItem = { description, quantity, packed: false, id: Date.now() };
    addItem(newItem);
    setDescribtion("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleAdd}>
      <h3>What do you need for your Trip</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, index) => index + 1).map((num) => (
          <option value={num}>{num}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescribtion(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </form>
  );
}
