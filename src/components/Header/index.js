import React from 'react';
import {Link} from 'react-router-dom';

import RMDBLogo from '../../images/react-movie-logo.svg'

import {Wrapper, Content, LogoImg} from "./Header.styles";

const Header = () => (
    <Wrapper>
        <Content>
            <Link to='/'>
                <LogoImg src={RMDBLogo} alt='logo'/>
            </Link>
        </Content>
    </Wrapper>
);

export default Header;