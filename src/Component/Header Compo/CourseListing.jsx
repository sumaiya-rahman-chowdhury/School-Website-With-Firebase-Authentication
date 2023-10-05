import { useContext, useEffect, useState } from "react";
import { AllContext } from "../Context/Context";
import Card from "../Card/Card";
import NoCatFound from "./NoCatFound";


const CourseListing = ({catagory}) => {
    const {allDatas} = useContext(AllContext)
    console.log(allDatas)
    const [alldata,setData] = useState(allDatas)

    useEffect(()=>{
        if(catagory){
            const newData = allDatas.filter(data=>data.category.toLowerCase()===catagory)
            setData(newData)
           }
       else{
        setData(allDatas)
       }
    },[allDatas,catagory])
    
    console.log(alldata)
    console.log(catagory)

    return (
        <div>
            <div className=" lg:grid md:grid lg:grid-cols-4 gap-5 my-10 md:grid-cols-3 grid-cols-1 justify-center flex flex-wrap">
                {
                 alldata.length>0?alldata.map(data=><Card key={data.id} data={data}></Card>) : <NoCatFound></NoCatFound>
                }
            </div>
        </div>
    );
};

export default CourseListing;