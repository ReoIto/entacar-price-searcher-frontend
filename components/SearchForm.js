import DateTimeInput from "./DateTimeInput";

export default function SearchForm({ handleChange, handleSubmit }) {
  return (
    <>
      <div className="w-10/12 mx-auto md:max-w-md pt-10">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-8">
            <DateTimeInput
              label="予約開始年月日"
              name="startDate"
              type="date"
              placeHolder=""
              handleChange={handleChange}
            />
          </div>
          <div className="mb-8">
            <DateTimeInput
              label="予約開始時間"
              name="startTime"
              type="text"
              placeHolder="13:15の場合、1315"
              handleChange={handleChange}
            />
          </div>
          <div className="mb-8">
            <DateTimeInput
              label="返却年月日"
              name="returnDate"
              type="date"
              placeHolder=""
              handleChange={handleChange}
            />
          </div>
          <div className="mb-8">
            <DateTimeInput
              label="返却時間"
              name="returnTime"
              type="text"
              placeHolder="17:00の場合、1700"
              handleChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-2 px-8 rounded-md focus:outline-none"
          >
            検索する
          </button>
        </form>
      </div>
    </>
  );
}
