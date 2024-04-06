import { FaArrowRight } from "react-icons/fa6";
import SliderComponent from "../../Component/SliderComponent/SliderComponent";
const Home = () => {
    return (
        <section className="ml-36 flex items-center lg:h-[600px]">
            <div className="flex items-center">
                <div className="lg:w-[40%]">
                    <h1 className="text-8xl font-bold text-white">COX'S BAZAR</h1>
                    <p className="text-base font-normal text-white max-w-[450px]">Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                    <button className="flex mt-6 items-center gap-x-2 bg-btnBg font-medium text-base text-black py-3 px-7 rounded-lg">Booking<FaArrowRight/></button>
                </div>
                <div className="overflow-hidden lg:w-[60%]">
                    <SliderComponent></SliderComponent>
                </div>
            </div>
        </section>
    );
};

export default Home;