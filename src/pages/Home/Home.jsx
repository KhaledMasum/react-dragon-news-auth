import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import { useLoaderData } from "react-router-dom";
import News from "./News";

const Home = () => {
    const news = useLoaderData();
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <LeftSideNav></LeftSideNav>
                <div className="md:col-span-2">
                    {
                        news.map(singleNews => <News key={singleNews._id} news={singleNews}></News>)
                    }
                </div>
                <RightSideNav></RightSideNav>
            </div>
        </div>
    );
};

export default Home;