import React from 'react';
import './header.style.scss';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
    return (
        <div className="wrapper">
            <div className="logo_header navbar_flex">
                <a href='/'>
                    <img src="../images/logo.jpg" alt="logo" />
                </a>
                <h4 className="title_logo">Củng Cố Kiến Thức Lập Trình</h4>
            </div>
            <div className="search_header navbar_flex">
                <div>
                    <div className="wrapper_search ">
                        <div className="search_icon"><SearchIcon /></div>
                        <input type="search" className="search_input" placeholder="Tìm kiếm ..." >

                        </input>

                    </div>
                </div>
            </div>
            <div className="login_header navbar_flex">
                <div>
                    <a className="login_btn" href="#">Đăng nhập</a>
                </div>
            </div>
        </div>
    );

}

export default Header
