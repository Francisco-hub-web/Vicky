import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';

const ImageBackground = styled(BackgroundImage)`
    height: 500px;  
`;  

const TextoImagen = styled.div`
    background-image: linear-gradient( to top, rgba(0,0,0,.8),rgba(30,30,15,.8));
    color: #FFF;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
    h1 {
        font-size: 2rem;
        margin: 0%;

        @media (min-width: 992px){
            font-size: 2.6rem;
        }
    }
    p {
        font-size: 1rem;
    }
`;

const Imageninicial = () => {

    /*
    const refMov = useRef(null);
    const refMov3 = useRef(null);

    useEffect(() => {
        gsap.from(refMov.current,{
            duration:3,
            x: 100,
            delay: 3.3
        });
        gsap.from(refMov3.current,{
            duration:3,
            y: -100,
            delay: 3.3
        });
    }, []);
    */
    

    const { image } = useStaticQuery(graphql`
    query {
        image: file(relativePath: { eq:"olins.png" } ) {
          sharp: childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `);

    return ( 
        <ImageBackground tag="section" fluid={image.sharp.fluid} fadeIn="soft" >
                <TextoImagen className="imageninicial">
                    <h1>Olins..</h1>
                    <p>...Holins...</p>
                   
                </TextoImagen>
        </ImageBackground>
    );
}
 
export default Imageninicial;