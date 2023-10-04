import  { useContext } from 'react';
import { AllContext } from '../Context/Context';

const Banner = () => {

    const {allDatas} = useContext(AllContext)
    // console.log(allDatas)
    return (
        <div className=' bg-banner h-[80vh] bg-cover bg-center bg-no-repeat mix-blend-overlay '>
            {/* <div className='w-full h-full bg-gradient-to-t from-slate-800 to-slate-400 bg-blend-overlay
             opacity-[90%]'>

            </div> */}
            <div className=' flex justify-center items-center h-full flex-col gap-y-10'>
            <h1 className=' text-white font-bold lg:text-6xl md:text-4xl text-2xl text-center'>Your Path to Knowledge Begins Here</h1>
               <form action="">
               <input type="text" placeholder='Art, Commerce or Science' className=' px-8 py-3 outline-pink-500/20 '/>
                <button type='submit'  className=' px-8 py-3 bg-gradient-to-tr from-gray-400 to-gray-300 shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] font-bold uppercase'>Search</button>
               </form>
            </div>
            
        </div>
    );
};

export default Banner;