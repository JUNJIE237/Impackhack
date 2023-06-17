import React, {useState} from "react";
import forecast_dashboard from "../data/forecast_dashboard.json";
import forecast_dashboard_updated from "../data/forecast_dashboard_updated.json";

export default function InventoryOverview() {

    const [ForecastData, setForecastData] = useState(forecast_dashboard);

    const updateData = () =>{
        setForecastData(forecast_dashboard_updated);
    };

    return(
        <div className="flex flex-col mt-8">
            <div className="flex justify-between">
                <p className="font-bold text-3xl mb-8">Forecast</p>
                <button onClick={()=>{updateData()}}>Click Me</button>
            </div>
            <div className="flex flex-col">
                {ForecastData.map((forecast)=>(
                    <div className="bg-white rounded-lg flex p-2 justify-between items-center mb-8">
                        <div className="flex items-center">
                            <img src="https://cdn-icons-png.flaticon.com/128/426/426833.png" className="scale-[0.40]"></img>
                            <p className="text-xl font-bold mr-2">{forecast.name}</p>
                            <span class="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">{forecast.category}</span>
                        </div>
                        <div className="mr-4">
                            <p className="font-bold text-lg">Units to buy : {forecast.uta}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
