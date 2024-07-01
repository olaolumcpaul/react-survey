// Component to render checkbox inputs for time spent options
export default function Checkboxes({ onChange, selectedValues }) {
  const checkboxes = [
    { name: "Swimming", value: "swimming" },
    { name: "Bathing", value: "bathing" },
    { name: "Chatting", value: "chatting" },
    { name: "I don't like to spend time with it", value: "noTime" },
  ];

  return (
    <ul>
      {checkboxes.map((checkbox) => (
        <li key={checkbox.value}>
          <label>
            <input
              name="timeSpent"
              type="checkbox"
              value={checkbox.value}
              checked={selectedValues.includes(checkbox.value)}
              onChange={onChange}
            />
            {checkbox.name}
          </label>
        </li>
      ))}
    </ul>
  );
}
