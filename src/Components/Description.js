import React from "react"

export default function Description({desTrig, show, setShow}){
    
    return(
        <div className=" bg-white px-5 py-5 gap-3 md:grid md:grid-cols-2">
            <div className="flex justify-center items-center">
                <img src={desTrig.images} alt={desTrig.name} className="w-[200px]"/>    
            </div>
            <div className="flex flex-col gap-2 justify-center">
                <p className="font-semibold text-lg">{desTrig.name}</p>
                <p>{desTrig.description}</p>
                <p className="font-bold text-lg">&#8358;{desTrig.price.toLocaleString()}</p>
                <p>{desTrig.size ? "-Size:" : "" } {desTrig.size} (inches)</p>
                <p>free shipping &#x1F69A;</p>
                <p>Will be delivered as frames in the picture</p>
                <div >
                    <button onClick={()=> setShow(!show)} className="bg-[#222222] mt-3 px-3 py-2 rounded-lg font-bold text-white">Exit</button>
                </div>
            </div>
        </div>
        
    )
}