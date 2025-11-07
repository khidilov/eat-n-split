import Friend from "./Friend";

export default function FriendsList({
  friends,
  onSelect,
  selected = { selected },
  balance = { balance },
  onBalance = { onBalance },
}) {
  return (
    <ul>
      {friends.map((fr) => (
        <Friend
          onSelect={onSelect}
          friend={fr}
          key={fr.id}
          selected={selected}
          balance={balance}
          onBalance={onBalance}
        />
      ))}
    </ul>
  );
}
