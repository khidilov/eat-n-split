import Button from "./Button";

export default function Friend({
  friend,
  onSelect,
  selected,
  balance,
  setBalance,
  onTransaction,
}) {
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

      {balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}$
        </p>
      )}
      {balance > 0 && (
        <p className="green">
          {friend.name} owes you {friend.balance}$
        </p>
      )}
      {balance === 0 && <p>You and {friend.name} are even</p>}
      <Button>{selected?.id === friend.id ? "Close" : "Select"}</Button>
    </li>
  );
}
