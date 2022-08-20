import DateTimeInput from "./DateTimeInput";

export default function SearchForm({ handleChange, handleSubmit, isLoading }) {
  return (
    <>
      <div className="w-full md:max-w-md pt-10 pb-10 mr-4 p-4 max-w-md bg-white rounded-lg border shadow-xl sm:p-8">
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
            className={`bg-blue-500 text-white font-semibold py-2 px-8 rounded-md focus:outline-none ${
              !isLoading && "hover:bg-blue-600 hover:shadow-lg"
            } ${isLoading && "bg-blue-200"}`}
            disabled={isLoading}
          >
            {isLoading ? "検索中" : "検索する"}
          </button>
        </form>
      </div>
    </>
  );
}
