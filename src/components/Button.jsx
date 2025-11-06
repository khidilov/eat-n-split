export default function Button({ children, onShowForm }) {
  return (
    <button onClick={onShowForm} className="button">
      {children}
    </button>
  );
}
