import Friend from "./Friend";

export default function FriendsList({
  friends,
  onSelect,
  selected = { selected },
}) {
  return (
    <ul>
      {friends.map((fr) => (
        <Friend
          onSelect={onSelect}
          friend={fr}
          key={fr.id}
          selected={selected}
        />
      ))}
    </ul>
  );
}
