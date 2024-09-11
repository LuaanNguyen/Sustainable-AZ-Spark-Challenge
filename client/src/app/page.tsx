"use client";

import dynamic from "next/dynamic";
const Map = dynamic(() => import("./Map"), {
  ssr: false,
  loading: () => (
    <div className="relative  mx-auto my-auto inset-0 w-12 h-12 rounded-full animate-spin border-8 border-dashed border-[#6B8E23] border-t-transparent"></div>
  ),
});
import Info from "./my-components/info";

export default function Home() {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("http://127.0.0.1:5000/");
  //       const data = await response.json();
  //       // Handle the data here
  //       console.log(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <div className="flex">
        <main className="grid grid-cols-4 h-[100vh] overflow-hidden flex-grow">
          <Info />
          <Map />
          <div className="border-l-2 h-[100%]">4</div>
        </main>
      </div>
    </>
  );
}
