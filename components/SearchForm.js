import DateTimeInput from "./DateTimeInput";

export default function SearchForm({ handleChange, handleSubmit }) {
  return (
    <>
      <div className="md:max-w-md pt-10 pb-10">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-8">
            <DateTimeInput
              label="予約開始年月日"
              name="startDate"
              type="date"
              handleChange={handleChange}
            />
          </div>
          <div className="mb-8">
            <DateTimeInput
              label="予約開始時刻"
              name="startTime"
              type="time"
              datalistName="onlyHours"
              handleChange={handleChange}
            />
          </div>
          <div className="mb-8">
            <DateTimeInput
              label="返却年月日"
              name="returnDate"
              type="date"
              handleChange={handleChange}
            />
          </div>
          <div className="mb-8">
            <DateTimeInput
              label="返却時刻"
              name="returnTime"
              type="time"
              datalistName="onlyHours"
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
