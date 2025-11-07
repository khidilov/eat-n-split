import { useState } from "react";
import Button from "./Button";
export default function FormSplitBill({ selected, onUpdate }) {
  const [bill, setBill] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const friendExpense = +bill - +yourExpense;
  const [whoPays, setWhoPays] = useState("user");

  return (
    <form
      className="form-split-bill"
      onSubmit={(e) => {
        e.preventDefault();

        if (isNaN(bill) || isNaN(yourExpense)) return;

        onUpdate(whoPays === "user" ? +friendExpense : -yourExpense);
      }}
    >
      <h2>Split bill with {selected?.name}</h2>

      <label> 💵 Bill value</label>
      <input
        value={bill}
        type="text"
        onChange={(e) => setBill(e.target.value)}
      />
      <label> 🦸🏻‍♀️ Your expense</label>
      <input
        value={yourExpense}
        onChange={(e) => setYourExpense(e.target.value)}
        type="text"
      />
      <label> 🧟 {selected?.name}'s expense </label>
      <input value={friendExpense} disabled type="text" />
      <label> 🤑 Who's paying the bill </label>
      <select value={whoPays} onChange={(e) => setWhoPays(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selected.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
