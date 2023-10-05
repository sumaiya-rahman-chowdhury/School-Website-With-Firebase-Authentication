import { useState } from "react";
import Context from "../Context/Context";
import Banner from "../Header Compo/Banner";
import CourseListing from "../Header Compo/CourseListing";

const Home = () => {
    const [catagory,setCatagory] = useState(null)
    const handleFormData = e =>{
        e.preventDefault()
        const cat = (e.target.name.value).toLowerCase()
        setCatagory(cat)
        e.target.reset()
    }
    return (
        <div>
          <Context>
          <Banner handleFormData={handleFormData}></Banner>
          <div className=" max-w-[1280px] mx-auto">
          <CourseListing catagory={catagory}></CourseListing>
          </div>
          </Context>
        </div>
    );
};

export default Home;