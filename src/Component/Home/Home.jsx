import Context from "../Context/Context";
import Banner from "../Header Compo/Banner";
import CourseListing from "../Header Compo/CourseListing";

const Home = () => {
    return (
        <div>
          <Context>
          <Banner></Banner>
          <div className=" max-w-[1280px] mx-auto">
          <CourseListing></CourseListing>
          </div>
          </Context>
        </div>
    );
};

export default Home;