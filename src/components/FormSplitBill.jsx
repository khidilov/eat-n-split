import { useState } from "react";
import Button from "./Button";
export default function FormSplitBill({ onCalc, selected, onTransction }) {
  const [bill, setBill] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const friendExpense = +bill - +yourExpense;
  return (
    <form
      className="form-split-bill"
      onSubmit={(e) => {
        e.preventDefault();
        onCalc(yourExpense - friendExpense);
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
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
