import React from "react";

export default function TableRows({ carList }) {
  // const renderCarList = carList.map((item, i) => {
  //   return (
  //     <>
  //       <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
  //         {item.shop_name}
  //       </td>
  //       <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
  //         {item.car_name}
  //       </td>
  //       <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
  //         {item.limit_of_passengers}
  //       </td>
  //       <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
  //         {item.price_title}
  //       </td>
  //       <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
  //         {item.price}
  //       </td>
  //       <br />
  //     </>
  //   );
  // });

  // return <tr>{renderCarList}</tr>;
  return (
    <>
      {carList.map((item, index) => {
        let i = index + 1;
        return (
          <tr>
            <td className="px-6 py-4 text-xs font-medium text-gray-800 whitespace-nowrap">
              {i}
            </td>
            <td className="px-6 py-4 text-xs font-medium text-gray-800 whitespace-nowrap">
              {item.shop_name}
            </td>
            <td className="px-6 py-4 text-xs text-gray-800 whitespace-nowrap truncate">
              {item.car_name}
            </td>
            <td className="px-6 py-4 text-xs text-gray-800 whitespace-nowrap">
              {item.limit_of_passengers}
            </td>
            <td className="px-6 py-4 text-xs text-gray-800 whitespace-nowrap">
              {item.price_title}
            </td>
            <td className="px-6 py-4 text-xs text-gray-800 whitespace-nowrap">
              {item.price}
            </td>
          </tr>
        );
      })}
    </>
  );
}
