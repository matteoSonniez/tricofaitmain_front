import Image from "next/image";
import Header from '@/components/Header';
import HomeFoto from '@/components/HomeFoto';
import Slider from '@/components/Slider';
import { Playfair_Display } from '@next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'], weight: '400' });

export default function Home() {
  return (
    <div>
      <HomeFoto></HomeFoto>
      <div className="mb-14 mt-24 text-white text-[40px] tracking-[0.06em] flex justify-center" >
        <text className={playfair.className}>Crochet Patterns</text>
      </div>
      <Slider></Slider>
      <text>test</text>
    </div>
  );
}
