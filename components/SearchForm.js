import DateTimeInput from "./DateTimeInput";
import { useForm } from "react-hook-form";

export default function SearchForm({
  isLoading,
  setIsLoading,
  handleSearchResultData,
}) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    setIsLoading(true);
    const res = await fetch(`${baseApiUrl()}/search?${setQuery(data)}`);
    const json = await res.json();
    handleSearchResultData(json);
    setIsLoading(false);
  }

  function baseApiUrl() {
    if (process.env.NODE_ENV === "production") {
      return process.env.NEXT_PUBLIC_PRODUCTION_API_URL;
    }

    return process.env.NEXT_PUBLIC_DEVELOPMENT_API_URL;
  }

  function setQuery(data) {
    const params = {
      startDate: data.startDate,
      startTime: data.startTime,
      returnDate: data.returnDate,
      returnTime: data.returnTime,
    };
    return new URLSearchParams(params);
  }

  return (
    <>
      <div className="w-full md:max-w-md pt-10 pb-10 mr-4 p-4 max-w-md bg-white rounded-lg border shadow-xl sm:p-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-8">
            <DateTimeInput
              label="予約開始日時"
              name="startDate"
              type="date"
              register={register}
            />
            {errors.startDate && (
              <span className="mb-8 text-red-500">
                予約開始日時が入力されていません
              </span>
            )}
          </div>

          <div className="mb-8">
            <DateTimeInput
              label="予約開始時刻"
              name="startTime"
              type="time"
              register={register}
              datalistName="onlyHours"
            />
            {errors.startTime && (
              <span className="mb-8 text-red-500">
                予約開始時刻が入力されていません
              </span>
            )}
          </div>

          <div className="mb-8">
            <DateTimeInput
              label="返却日時"
              name="returnDate"
              type="date"
              register={register}
            />
            {errors.returnDate && (
              <span className="mb-8 text-red-500">
                返却日時が入力されていません
              </span>
            )}
          </div>

          <div className="mb-8">
            <DateTimeInput
              label="返却時刻"
              name="returnTime"
              type="time"
              register={register}
              datalistName="onlyHours"
            />
            {errors.returnTime && (
              <span className="mb-8 text-red-500">
                返却時刻が入力されていません
              </span>
            )}
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
