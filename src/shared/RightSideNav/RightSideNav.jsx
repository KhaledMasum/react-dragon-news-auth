import { FaFacebook, FaGoogle, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import qZone1 from '../../assets/qZone1.png';
import qZone2 from '../../assets/qZone2.png';
import qZone3 from '../../assets/qZone3.png';

const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-4">
                <h2 className="text-3xl">Login With</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle />
                    Login With Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub />
                    Login With Github
                </button>
            </div>
            <div className="p-4 mb-4">
                <h2 className="text-3xl mb-2">Find us on</h2>
                <a href="" className="p-4 flex text-lg items-center border rounded-t-lg">
                    <FaFacebook className="mr-3" />
                    <span>Facebook</span>
                </a>
                <a href="" className="p-4 flex text-lg items-center border-x">
                    <FaTwitter className="mr-2" />
                    <span>Twitter</span>
                </a>
                <a href="" className="p-4 flex text-lg items-center border rounded-b-lg">
                    <FaInstagram className="mr-2" />
                    <span>Instagram</span>
                </a>
            </div>
            <div className="p-4 space-y-3 mb-4">
                <h2 className="text-3xl">Q-Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;