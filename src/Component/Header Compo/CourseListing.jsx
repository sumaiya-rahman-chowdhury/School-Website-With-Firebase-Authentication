import { useContext } from "react";
import { AllContext } from "../Context/Context";
import Card from "../Card/Card";




const CourseListing = () => {
    const {allDatas} = useContext(AllContext)
    // console.log(allDatas)
    return (
        <div>
            <div className=" lg:grid md:grid lg:grid-cols-4 gap-5 my-10 md:grid-cols-3 grid-cols-1 justify-center flex flex-wrap">
                {
                    allDatas.map(data=><Card key={data.id} data={data}></Card>)
                }
            </div>
        </div>
    );
};

export default CourseListing;