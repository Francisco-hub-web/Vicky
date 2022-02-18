import React from 'react';
import Helmet from 'react-helmet';

const LayoutPrincipal = ({children}) => {
    return ( 
        <>
        <Helmet>
            <title>Super Consultora INICIO</title>
            <meta name="description" content="Prioriza tu tiempo | Asesorias con precios claros | Soluciones Excel, Power Bi y Web" />
            <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
        </Helmet>
        {children}
        </>
     );
}

export default LayoutPrincipal;



