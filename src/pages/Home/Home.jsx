import Header from "../../shared/Header/Header";
import LeftSideNav from "../../shared/LeftSideNav/LeftSideNav";
import Navbar from "../../shared/Navbar/Navbar";
import RightSideNav from "../../shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <LeftSideNav></LeftSideNav>
                <div className="col-span-2">
                    <h2>News comming soon</h2>
                </div>
                <RightSideNav></RightSideNav>
            </div>
        </div>
    );
};

export default Home;