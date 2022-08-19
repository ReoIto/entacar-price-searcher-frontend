import Head from "next/head";
import { useState } from "react";
import CalculatedPrices from "../components/CalculatedPrices";
import SearchForm from "../components/SearchForm";
import SearchResultTable from "../components/SearchResultTable";

export default function Home() {
  const [values, setValues] = useState({
    startDate: "",
    startTime: "",
    returnDate: "",
    returnTime: "",
  });

  const [searchResult, setSearchResult] = useState({
    averagePrice: "",
    highestPrice: "",
    cheapestPrice: "",
    carList: [],
  });

  function handleChangeValue(e) {
    if (e === undefined) {
      return;
    }

    const key = e.target.name;
    const value = e.target.value;
    setValues((values) => ({
      ...values,
      [key]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const params = {
      startDate: values.startDate,
      startTime: values.startTime,
      returnDate: values.returnDate,
      returnTime: values.returnTime,
    };
    const query = new URLSearchParams(params);

    let baseApiUrl;
    if (process.env.NODE_ENV === "production") {
      baseApiUrl = process.env.NEXT_PUBLIC_PRODUCTION_API_URL;
    } else {
      baseApiUrl = process.env.NEXT_PUBLIC_DEVELOPMENT_API_URL;
    }
    const res = await fetch(`${baseApiUrl}/search?${query}`);
    const json = await res.json();
    handleSearchResultData(json);
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
    <div className="container mx-auto">
      <Head>
        <title>Rentacar Price Searcher</title>
        <meta
          name="description"
          content="沖縄のレンタカーの価格の平均値などを検索できるサービスです"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-row w-full items-center my-5">
        <SearchForm
          handleChange={handleChangeValue}
          handleSubmit={handleSubmit}
        />
        <CalculatedPrices
          averagePrice={searchResult.averagePrice}
          highestPrice={searchResult.highestPrice}
          cheapestPrice={searchResult.cheapestPrice}
        />
      </div>
      <SearchResultTable carList={searchResult.carList} />
    </div>
  );
}
