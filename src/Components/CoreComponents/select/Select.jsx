import Select from "react-select";

function SelectComponent({ value, onChange, options, label }) {
  return (
    <div>
      {label && <label htmlFor="">{label}</label>}
      <Select
        value={value}
        onChange={onChange}
        options={options}
        styles={{
          control: (base) => ({
            ...base,
            backgroundColor: "transparent",
            borderRadius: "8px",
            border: "1px solid #ddd",
            padding: "4px",
            boxShadow: "none",
            color: "white", 
            width:"245px",
            height:"40px"
          }),
          menu: (base) => ({
            ...base,
            backgroundColor: "rgba(0, 0, 0, 0.5)", 
          }),
          option: (base, { isFocused, isSelected }) => ({
            ...base,
            backgroundColor: isSelected
              ? "rgba(255, 255, 255, 0.3)" 
              : isFocused
              ? "rgba(255, 255, 255, 0.2)"
              : "transparent",
            color: "white",
          }),
          singleValue: (base) => ({
            ...base,
            color: "white", 
          }),
        }}
      />
    </div>
  );
}

export default SelectComponent;

