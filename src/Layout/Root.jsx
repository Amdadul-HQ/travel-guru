import Header from "../Component/Header/Header";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <section className="w-full h-screen  bg-[linear-gradient(45deg,rgba(0,0,0,0.7),rgba(0,0,0,0.70)),url('/background.png')] bg-cover bg-center bg-no-repeat ">
            <Header/>
            <Outlet/>
        </section>
    );
};

export default Root;