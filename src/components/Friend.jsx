import Button from "./Button";

export default function Friend({ friend, onSelect, selected }) {
  return (
    <li
      className={selected?.id === friend.id ? "selected" : ""}
      onClick={() => {
        // selected?.id === friend.id ? onSelect(null) : onSelect(friend);

        onSelect(selected?.id === friend.id ? null : friend);
      }}
    >
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {friend.balance}$
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      <Button>{selected?.id === friend.id ? "Close" : "Select"}</Button>
    </li>
  );
}
