import Layout from '../components/Layout';
import Carousel from '../components/Carousel/Carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Partners from '../components/partners/Partners';

const Home = () => (
  <div>
    <Layout>
      <article>
        <h1>Bienvenue sur La Sauce Numérique !</h1>
        <Carousel />
      </article>
      <h1>Nos Partenaires</h1>
      <Partners />
    </Layout>
  </div>
);

export default Home;
