import React, {useState} from "react";
import inv_data from "../data/inv_overview.json";
import inv_data_updated from "../data/inv_overview_updated.json";

export default function InventoryOverview() {

    const [InvData, setInvData] = useState(inv_data);

    const updateData = () =>{
        setInvData(inv_data_updated);
    };

    return(
        <div className="flex flex-col">
            <div className="flex justify-between">
                <p className="font-bold text-3xl mb-8">Inventory Overview</p>
                <button onClick={()=>{updateData()}}>Click Me</button>
            </div>
            <div className="grid grid-cols-3 gap-12">
                {InvData.map((inv)=>(
                    <div className="bg-white rounded-xl flex flex-col p-4">
                        <div className="flex mb-8 justify-between">
                            <div className="flex-flex-col">
                                <p className="font-bold">{inv.name}</p>
                                <p className="">{inv.category}</p>
                            </div>
                            <div className="flex">
                                {inv.stock < 30 ? <img src="https://cdn-icons-png.flaticon.com/128/9392/9392685.png" width={50} height={10} className="scale-50"></img> : <img className="hidden"></img> }
                                {inv.stock > 30 && inv.stock < 50 ? <img src="https://cdn-icons-png.flaticon.com/128/6897/6897039.png" width={50} height={10} className="scale-50"></img> : <img className="hidden"></img> }
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-bold">Stock: {inv.stock}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
