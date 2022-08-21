import { useForm } from "react-hook-form";
import DateTimeInput from "./DateTimeInput";
import ErrorMessage from "./ErrorMessage";

export default function SearchForm({
  isLoading,
  setIsLoading,
  setSearchResult,
}) {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    if (!isValidDateInput(data.startDate, data.returnDate)) {
      return;
    }

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

  function isValidDateInput(startDate, returnDate) {
    startDate = new Date(startDate);
    returnDate = new Date(returnDate);

    if (startDate < returnDate) {
      return true;
    }

    setError("returnDate", {
      type: "returnDateMustFutureError",
      message: "「返却日時」は「予約開始日時」よりも未来に設定してください",
    });
    return false;
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

  function handleSearchResultData(json) {
    setSearchResult((res) => ({
      ...res,
      averagePrice: json.search_result.average_price,
      highestPrice: json.search_result.highest_price,
      cheapestPrice: json.search_result.cheapest_price,
      carList: json.search_result.car_list,
    }));
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
              <ErrorMessage message={"予約開始日時が入力されていません"} />
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
              <ErrorMessage message={"予約開始時刻が入力されていません"} />
            )}
          </div>

          <div className="mb-8">
            <DateTimeInput
              label="返却日時"
              name="returnDate"
              type="date"
              register={register}
            />
            {errors.returnDate?.type === "required" && (
              <ErrorMessage message={"返却日時が入力されていません"} />
            )}
            {errors.returnDate?.type === "returnDateMustFutureError" && (
              <ErrorMessage message={errors.returnDate.message} />
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
              <ErrorMessage message={"返却時刻が入力されていません"} />
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
