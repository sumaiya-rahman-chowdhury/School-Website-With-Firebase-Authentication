import { useContext, useState } from "react";
import { NavLink,Link } from "react-router-dom";
import { AuthenticationProvider } from "../Context/Authentication";
const Navbar = () => {
    const {user,logOut} = useContext(AuthenticationProvider)
    console.log(user)
    const navItems = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/'>Courses</NavLink></li>
    </>

    const handleLogOut = () =>{
        logOut().then(()=>{
            alert("Log Out")
        })
        .catch(error=>{
            console.log(error)
        })
    }
    const [show, setShow] = useState(true)
    console.log(show)
    return (
        <div>
            <nav className="mx-auto block w-full  border border-white/80 bg-white bg-opacity-80 py-2 px-4 text-white shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
                <div>
                    <div className="container mx-auto flex items-center justify-between text-gray-900">
                        <a
                            href="#"
                            className="mr-4 block cursor-pointer py-1.5 font-sans text-sm font-normal leading-normal text-inherit antialiased"
                        >
                            <span className=" font-bold text-2xl">Free School</span>
                        </a>
                        <ul className="hidden items-center gap-6 lg:flex">
                            {navItems}
                        </ul>
                       <div className=" space-x-5">
                      {
                        user?"":<Link to='/login'> <button
                        className="middle none center hidden  bg-gradient-to-tr from-gray-400 to-gray-300 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block rounded-none"
                        type="button"
                        data-ripple-light="true"
                    >
                        <span>Login</span>
                    </button></Link>
                      }
                    {
                        user?"":   <Link to='/registration'>
                        <button
                             className="middle none center hidden  bg-gradient-to-tr from-gray-400 to-gray-300 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                             type="button"
                             data-ripple-light="true"
                         >
                             <span>Registration</span>
                         </button>
                        </Link>
                    }
                    {
                        user? <Link to='/profile'>
                        <button
                             className="middle none center hidden  bg-gradient-to-tr from-gray-400 to-gray-300 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                             type="button"
                             data-ripple-light="true"
                         >
                             <span>Profile</span>
                         </button>
                        </Link>:""
                    }
                    {
                        user? <Link to='/'>
                        <button
                             className="middle none center hidden  bg-gradient-to-tr from-gray-400 to-gray-300 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                             type="button"
                             data-ripple-light="true" onClick={handleLogOut}
                         >
                             <span>Logout</span>
                         </button>
                        </Link>:""
                    }
                       </div>
                        <button
                            className="middle none relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] rounded-lg text-center font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
                            data-collapse-target="navbar"
                            onClick={() => setShow(!show)}
                        >
                            <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform" >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    ></path>
                                </svg>
                            </span>
                        </button>
                    </div>

                </div>
            </nav>
            <div className="flex w-1/2 shadow-lg lg:hidden">

                <div className={`${show ? ' hidden' : ''} w-full `}>
                    <ul className="text-black p-5 space-y-5">
                        {navItems}
                    </ul>
                    <div className=" flex justify-end  p-3">
                        <button className="px-3 py-3 rounded-full  bg-red-600 text-white" onClick={()=>setShow(!show)}>close</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;