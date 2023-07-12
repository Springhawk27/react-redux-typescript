import { Button } from '@/components/ui/button';
import banner from '@/assets/images/banner.png';
import hero from '@/assets/images/hero.png';
import { Link } from 'react-router-dom';
import Footer from '@/layouts/Footer';

export default function Home() {
  return (
    <>
      <div className="flex justify-between items-center sm:h-[calc(100vh-80px)] max-w-7xl mx-auto px-4 md:px-12 sm:px-8 sm:py-0 py-4">
        <div>
          <h1 className="md:text-6xl sm:text-3xl text-lg font-black text-primary mb-2">
            HAYLOU <br /> SOLAR PLUSE
          </h1>
          <p className="text-secondary font-semibold md:text-xl sm:text-base text-sm">
            Effortless communication at your fingertips
          </p>
          <div className="text-primary md:mt-16 sm:mt-8 mt-4 md:text-xl sm:text-base text-xs">
            <p>Bluetooth 5.2 for easy, secure communication</p>
            <p>Precise 143 Amoled display for clear visuals</p>
          </div>
          <Button className="mt-5">Learn more</Button>
        </div>
        {/* <div className="relative -right-14"> */}
        <div className="relative ">
          <img src={banner} alt="" />
        </div>
      </div>
      <div className="md:mb-96 sm:mb-48 mb-24">
        <div>
          <img className="mx-auto" src={hero} alt="" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="md:text-5xl sm:text-2xl text-xl font-black text-primary uppercase mt-10">
            The future of tech is here
          </h1>
          <Button className="mt-10" asChild>
            <Link to="/products">Brows all products</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}
