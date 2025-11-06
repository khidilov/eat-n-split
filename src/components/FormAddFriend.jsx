import { useState } from "react";
import Button from "./Button";

export default function FormAddFriend({ onSetFriends, onShowFriends }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function addFriend(e) {
    e.preventDefault();
    if (name === "" || image === "") return;
    const id = crypto.randomUUID();
    const newFriend = {
      name,
      image: `${image}?=${id}`,
      id,
      balance: 0,
    };
    console.log(newFriend);
    onSetFriends(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48");
    onShowFriends(false);
  }
  return (
    <form className="form-add-friend" onSubmit={(e) => addFriend(e)}>
      <label> 👯 Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label> 🌠 Image url</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}
