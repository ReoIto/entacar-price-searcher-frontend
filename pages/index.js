import Head from "next/head";

export default function Home({ props }) {
  const { search_results, average_price, cheapest_price, highest_price } =
    props.search_results;

  const renderSearchResults = search_results.map((res, i) => {
    return (
      <div key={i}>
        <p>{res.shop_name}</p>
        <p>{res.car_name}</p>
        <p>{res.limit_of_passengers}</p>
        <p>{res.price_title}</p>
        <p>{res.price}</p>
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

      <div className="text-2xl font-bold">
        <h2>{`平均値 : ${average_price}`}</h2>
        <h2>{`最高値 : ${highest_price}`}</h2>
        <h2>{`最安値 : ${cheapest_price}`}</h2>
        <span>-------------------------------</span>
      </div>
      <div className="text-3xl font-bold pb-5">検索結果</div>
      {renderSearchResults}
    </div>
  );
}

export async function getServerSideProps() {
  let baseApiUrl;
  if (process.env.NODE_ENV === "production") {
    baseApiUrl = process.env.PRODUCTION_API_URL;
  } else {
    baseApiUrl = process.env.DEVELOPMENT_API_URL;
  }

  const res = await fetch(`${baseApiUrl}/search`);
  const props = await res.json();

  return { props: { props } };
}
