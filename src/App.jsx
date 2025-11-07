import FriendsList from "./components/FriendsList";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import Button from "./components/Button";
import { useState } from "react";

export default function App() {
  const [showAddFriends, setShowAddFriends] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selection, setSelection] = useState(null);
  function handleAddFriends() {
    setShowAddFriends((cur) => !cur);
  }
  function handleAddNewFriends(friend) {
    setFriends((friends) => [...friends, friend]);
  }

  function updateBalance(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        selection.id === friend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          formState={showAddFriends}
          friends={friends}
          onSelect={setSelection}
          selected={selection}
        />
        {showAddFriends && (
          <FormAddFriend
            onSetFriends={handleAddNewFriends}
            onShowFriends={setShowAddFriends}
          />
        )}
        <Button onShowForm={handleAddFriends}>
          {showAddFriends ? "Close" : "Add friends"}
        </Button>
      </div>
      {selection && (
        <FormSplitBill selected={selection} onUpdate={updateBalance} />
      )}
    </div>
  );
}

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
