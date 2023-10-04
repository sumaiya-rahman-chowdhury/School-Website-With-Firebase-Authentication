import { createContext, useEffect, useState } from "react";

export const AllContext = new createContext(null)


const Context = ({children}) => {
    const [allDatas,setAlldatas] = useState([])

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const response = await fetch('/data.json')
                const allData = await response.json()
                setAlldatas(allData)
            }
            catch(error){
                console.log("error fetch",error)
            }
        }
        fetchData()
    },[])

    const contextVal = {allDatas}
    return (
        <div>
            <AllContext.Provider value={contextVal}> 
                {children}
            </AllContext.Provider>
        </div>
    );
};

export default Context;