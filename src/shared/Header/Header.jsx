import logo from '../../assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center'>
            <img src={logo} alt="" className='mx-auto' />
            <p>Journalism Without Fear or Favour</p>
            <p>{moment().format('dddd, MMMM DD, YYYY')}</p>
        </div>
    );
};

export default Header;