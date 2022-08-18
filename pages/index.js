import Head from "next/head";
import { useState } from "react";
import SearchForm from "../components/SearchForm";

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

  const renderCarList = searchResult.carList.map((item, i) => {
    return (
      <div key={i}>
        <p>{item.shop_name}</p>
        <p>{item.car_name}</p>
        <p>{item.limit_of_passengers}</p>
        <p>{item.price_title}</p>
        <p>{item.price}</p>
        <span>-------------------------------</span>
      </div>
    );
  });

  return (
    <div>
      <Head>
        <title>Rentacar Price Searcher</title>
        <meta
          name="description"
          content="沖縄のレンタカーの価格の平均値などを検索できるサービスです"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SearchForm
        handleChange={handleChangeValue}
        handleSubmit={handleSubmit}
      />

      <div className="text-2xl font-bold">
        <h2>{`平均値 : ${searchResult.averagePrice}`}</h2>
        <h2>{`最高値 : ${searchResult.highestPrice}`}</h2>
        <h2>{`最安値 : ${searchResult.cheapestPrice}`}</h2>
        <span>-------------------------------</span>
      </div>
      <div className="text-3xl font-bold pb-5">検索結果</div>
      {renderCarList}
    </div>
  );
}
