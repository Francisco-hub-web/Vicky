import React from 'react'
import styled from '@emotion/styled';
const Footerstyle = styled.footer`
    background-color: red;
    padding: 1rem;
    margin-top: 1rem;
    `;

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <Footerstyle>
            <div>Pie de página</div>
            <p>MOVI. Todos los derechos Reservados {year} &copy;</p>
        </Footerstyle>
    )
}

export default Footer
