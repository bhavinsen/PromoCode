import './reusecss/header.scss';

const Header: any = () => {
    return (
        <div className='header'>
            <div className='heder_title'>
                <p className='header_font'>Balance</p>
                <p className='header_count'>213 920$</p>
            </div>
            <div>
                <p className='header_font'>Payout</p>
                <p className='header_count'>159 465 $</p>
            </div>
        </div>
    );
};

export default Header;
