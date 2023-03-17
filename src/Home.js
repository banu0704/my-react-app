import React from "react";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";

const Home = ()=>{
  const data = {
    name: "Ecomm Store",
  }
 return (
  <>
    <HeroSection  myData={data}/>
    <Services />
    <Trusted />
  </>
 )
}
export default Home;


// import React from "react";
// import styled from "styled-components";

// const Home = ()=>{
//   return <Wrapper className="test">Home</Wrapper>
// }
// const Wrapper = styled.section`
//      background-color: ${({theme}) => theme.colors.bg};
//     // width: 20rem;
//      height: 100vh;
// `;
// export default Home;