// Component to render radio button inputs for colour rating
export default function RadioButtons({ onChange, selectedValue }) {
  const radioButtons = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
  ];

  return (
    <ul>
      {radioButtons.map((radio) => (
        <li key={radio.value}>
          <input
            id={`color-${radio.value}`}
            type="radio"
            name="colour"
            value={radio.value}
            checked={selectedValue === radio.value}
            onChange={onChange}
          />
          <label htmlFor={`color-${radio.value}`}>{radio.label}</label>
        </li>
      ))}
    </ul>
  );
}
