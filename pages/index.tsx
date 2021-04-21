import Meta from "../public/meta.json";
import { Component } from "react";

class Index extends Component {
  public render() {
    return (
      <div className="flex flex-col h-screen">
        <div className="mx-auto my-auto p-5">
          <div className="text-center text-white text-3xl mb-10 whitespace-nowrap">
            <pre>
              {"Mga Tradisyonal na Pagkain,\ngaling Africa"}
            </pre>
          </div>

          <div className="flex flex-row flex-wrap gap-6 justify-center m-5">
            {Meta.foods.map((food, i) => (
              <div 
                key={i}
                style={{
                  backgroundColor: "rgb(36, 36, 36)"
                }}
                className="flex flex-col rounded-md gap-3 shadow-lg max-w-md transform transition duration-200 hover:scale-105"
              >
                <div>
                  <img
                    className="max-w-md max-h-60 rounded-t-md w-full"
                    src={food.url}
                  />
                </div>

                <div className="flex flex-col flex-wrap gap-2 px-4 mt-2 mb-3">
                  <div className="text-xl font-normal text-white">
                    {food.name}
                  </div>
                  <div className="text-gray-400 break-all">
                    {food.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Index;