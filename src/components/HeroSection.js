import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./styles/Button";

const HeroSection = ({myData}) => {
    const {name} = myData
  return (
    <Wrapper>
        <div className="container">
            <div className="grid grid-two-column">

                {/* hero-section-data */}
                <div className="hero-section-data">
                    <p className="intro-data">Welcome to</p>
                    <h2> {name} </h2>
                    <p>Currently a considerable percentage of world's population <i className="intro-data-2">prefers online shopping</i> versus visiting a physcal store</p>
                    <NavLink>
                        <Button>shop now</Button>
                    </NavLink>
                </div>

                {/* hero-section-image */}
                <div className="hero-section-image">
                    <figure>
                        <img src="./images/hero.webp" className="img-style" alt="hero-section-image"/>
                    </figure>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    padding: 10rem;
    img{
        min-width: 10rem;
        height: 10rem;
    }
    .hero-section-data{
        p{
            margin: 2rem 0;
            i{
                color: #EE0DD0;
            }
        }
        

        h2{
            text-transform: capitalize;
            font-weight: bold;
            font-style: italic
        }
        .intro-data{
            margin-bottom: 0;
        }
    }
    .hero-section-image {
        width: 110%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    figure {
        position: relative;
        &::after {
           // content: "";
            width: 60%;
            height: 80%;
            background-color: rgba(81, 56, 238, 0.4);
            position: absolute;
            left: 50%;
            top: -5rem;
            z-index: -1;
        }
    }
    .img-style {
        width: 100%;
        height: auto;
    }
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
        .grid {
            gap: 10rem;
        }
        figure::after {
           // content: "";
            width: 50%;
            height: 100%;
            left: 0;
            top: 10%;
            /* bottom: 10%; */
            background-color: rgba(81, 56, 238, 0.4);
        }
    }

`;

export default HeroSection;