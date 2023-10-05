import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {
    const allData = useLoaderData()
    const id = useParams()
    console.log(id)
    console.log(allData)

    const [data, setData] = useState(null)

    useEffect(()=>{
        const newData = allData.find(singleData=>singleData.id == id.id)
    setData(newData)
    },[allData,id])
     
    console.log(data)


    return (
        <div className=" flex justify-center items-center h-auto">
            <div className="relative flex w-full lg:p-20 flex-col  bg-white bg-clip-border text-gray-700  ">
                <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                    <img
                        src={data?.cover_photo}
                        alt="ui/ux review check"
                    />
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
                    <button
                        className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-dark="true"
                    >
                        <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                                className="h-6 w-6"
                            >
                                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
                            </svg>
                        </span>
                    </button>
                </div>
                <div className="p-6">
                    <div className="mb-3 flex items-center justify-between">
                        <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                           {data?.name}
                        </h5>
                    </div>
                    <p className="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
                        {data?.description} .
                        Education provides individuals with access to a vast body of knowledge encompassing various subjects and disciplines. It equips them with the information necessary to understand the world, its history, and the interconnectedness of various fields.
                    </p>

                </div>
            
              <button
                     className="middle none center   bg-gradient-to-tr from-gray-400 to-gray-300 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block w-28 mx-auto "
                    type="button"
                    data-ripple-light="true"
                >
                    Enroll
                </button>
              
            </div>
        </div>
    );
};

export default CardDetails;