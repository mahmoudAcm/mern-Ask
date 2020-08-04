import React from 'react';
import '../../css/header.css'
import { Link } from 'react-router-dom';

const Header = (props) => {
    const { notficationNumber } = props ;
    return (
        <header className='fixed-top bg-dark'>
            <div className='container container-sm container-md'>
                <span className='navbar-brand brand'>askFm</span>
                <nav className='navbar navbar-expand-lg float-right'>
                    <ul className="navbar-nav">
                        <li className='navbar-item mr-5 nav-item-color' title='feed'><Link to='/account/wall'><i className="fa fa-home"></i></Link></li>
                        <li className='navbar-item mr-5 nav-item-color' title='Question'><Link to='/account/inbox'><i className="fa fa-question-circle"></i></Link></li>
                        <li className='navbar-item mr-5 nav-item-color' title='profile'><Link to='/profile'><i className="fa fa-user-circle"></i></Link></li>
                        <li className='navbar-item mr-5 nav-item-color' title='freinds'><i className="fa fa-ellipsis-h"></i></li>
                        <li className='navbar-item mr-5 nav-item-color' title='notification'>
                            <Link to='/account/notfication'>
                                <i className="fa fa-bell">
                                    <span className="badge badge-light position-relative notification bg-danger">{notficationNumber}</span>
                                </i>
                            </Link>
                        </li>
                        <div className="dropdown navbar-item mr-2 nav-item-color cursor-pointer">

                            <i className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-cog"></i>
                            </i>
                            <div className="dropdown-menu">
                                <div className="dropdown-item">settings</div>
                                <Link to='/account/logout'><div className="dropdown-item">Log Out</div></Link>
                            </div>
                        </div>
                        <div className='navbar-item wallet rounded-wallet mr-2 rounded-right' title='wallet'>
                            <span className='ml-2 text-danger'><i className="fa fa-certificate"></i></span>
                            <span className='float-right mr-3 text-light'>3</span>
                        </div>
                        <div className='navbar-item nav-item-color activity rounded' title='activity'><span>+</span></div>
                    </ul>
                </nav>
                <div className='clearfix'></div>
            </div>
        </header >
    );
};

Header.defaultProps = {
    notficationNumber: 30
}

export default Header;