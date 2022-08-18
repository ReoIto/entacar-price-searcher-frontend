export default function DateTimeInput({
  label,
  name,
  type,
  placeHolder,
  handleChange,
}) {
  return (
    <>
      <label htmlFor={name} className="text-sm block">
        {label}
      </label>
      <input
        name={name}
        id={name}
        type={type}
        className="border-b w-full py-2 focus:outline-none focus:border-b-2 focus:border-blue-500"
        placeholder={placeHolder}
        onChange={(e) => handleChange(e)}
      />
    </>
  );
}
