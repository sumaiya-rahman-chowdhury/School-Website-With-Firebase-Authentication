import { useContext } from "react";
import { AuthenticationProvider } from "../../Context/Authentication";

const Registration = () => {

    const {signUp} = useContext(AuthenticationProvider)

    const handleSignUp = (e)=>{
        e.preventDefault()
        const email = e.target.email.value ;
        const password = e.target.password.value
        console.log(email,password)
        signUp(email,password)
        .then(res=>{
            console.log(res.user)
        })
        .catch(error=>{
            console.log(error.message)
        })
    }

    return (
        <div>
              <div className="flex justify-center items-center h-[50vh] text-gray-600 ">
           <form action="" className="flex flex-col p-5 gap-y-3" onSubmit={handleSignUp}>
                <h1 className=" font-bold text-3xl text-center">Registration</h1>
                <input type="email" name="email"  className="px-5 py-2 border-2 lg:w-[400px]"  placeholder="...Your Email"/>
                <input type="password" className="px-5 py-2 border-2"  name="password" placeholder="...Your Password"/>
               <div className=" flex justify-center">
               <button  className="middle none center bg-gradient-to-tr from-gray-400 to-gray-300 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block " type="submit">Registration</button>
               </div>
            </form>
           </div>
        </div>
    );
};

export default Registration;