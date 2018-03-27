import React from 'react';

const Header = (props) => (
    <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
);

//Default props for Header component
Header.defaultProps = {
    title: 'Indecision'
}
export default Header;
