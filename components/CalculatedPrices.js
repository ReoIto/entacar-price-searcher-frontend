import ProgressTableSkeleton from "./ProgressTableSkeleton";

export default function CalculatedPrices({
  averagePrice,
  highestPrice,
  cheapestPrice,
  averagePriceBetweenAverageAndCheapest,
  isLoading,
}) {
  const allPriceObj = [
    {
      priceKindName: "提示価格",
      amount: averagePriceBetweenAverageAndCheapest?.toLocaleString() || 0,
    },
    {
      priceKindName: "平均価格",
      amount: averagePrice?.toLocaleString() || 0,
    },
    {
      priceKindName: "最安値",
      amount: cheapestPrice?.toLocaleString() || 0,
    },
    {
      priceKindName: "最高値",
      amount: highestPrice?.toLocaleString() || 0,
    },
  ];

  return (
    <div className="p-4 w-full max-w-md bg-white rounded-lg border shadow-2xl sm:p-8 mx-auto">
      <div className="items-center mb-10">
        <p className="text-2xl font-bold leading-none text-gray-900 ">
          検索結果のレーティング
        </p>
      </div>
      <div className="flow-root">
        {isLoading ? (
          <ProgressTableSkeleton />
        ) : (
          <ul role="list" className="divide-y divide-gray-200">
            {allPriceObj?.map((item) => {
              return (
                <li className="py-3 sm:py-4" key={item.priceKindName}>
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-blue-600 text-xl font-bold truncate">
                        {item.priceKindName}
                      </p>
                    </div>
                    <div className="inline-flex items-center text-2xl font-bold text-gray-900">
                      {`¥ ${item.amount}`}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
