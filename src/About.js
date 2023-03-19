import HeroSection from './components/HeroSection';
import { useProductContext } from './context/productContext';

const About = () => {
  const {consumer} = useProductContext();
  const data = {
    name: "My Ecomm Store"
  }
  return (
    <>
      {consumer}
      <HeroSection  myData={data}/>
    </>
  )
}

export default About;