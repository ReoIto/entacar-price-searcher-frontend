export default function DateTimeInput({
  register,
  label,
  name,
  type,
  placeHolder,
  datalistName,
}) {
  function datalistOptionsForHours() {
    if (datalistName !== "onlyHours") {
      return;
    }

    const hours = [
      "06",
      "07",
      "08",
      "09",
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ];

    return hours.map((hour) => {
      return <option value={`${hour}:00`} key={`option-${hour}`} />;
    });
  }

  function datalistTag() {
    if (datalistName !== "onlyHours") {
      return;
    }

    return <datalist id={datalistName}>{datalistOptionsForHours()}</datalist>;
  }

  return (
    <>
      <label htmlFor={name} className="text-sm block">
        {label}
      </label>
      <input
        {...register(name, { required: true })}
        name={name}
        id={name}
        type={type}
        className="border-b w-full py-2 focus:outline-none focus:border-b-2 focus:border-blue-500"
        placeholder={placeHolder}
        list={datalistName}
      />

      {datalistTag()}
    </>
  );
}
