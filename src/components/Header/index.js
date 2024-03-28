"use client";
import Link from "next/link";
import Insta from '@/img/instagram.png';
import Panier from '@/img/paniers.png';
import Mail from '@/img/courrier.png';
import { Tangerine } from '@next/font/google'
import { Playfair_Display } from '@next/font/google'

const tangerine = Tangerine({ subsets: ['latin'], weight: '400' });
const playfair = Playfair_Display({ subsets: ['latin'], weight: '400' });

const Index = () => {
    
    return (
        <>
        <header className="justify-between flex py-3 px-16 fixed z-50 w-4/5 bg-thebg rounded-full left-1/2 -translate-x-1/2 top-4 opacity-90">
            <div className="w-1/3 flex items-center justify-start space-x-10">
                <Link href="/" className={playfair.className}>
                    <h1 className="text-[17px] tracking-[0.04em] ">shop</h1>
                </Link>
                <Link href="/" className={playfair.className}>
                    <h1 className="text-[17px] tracking-[0.04em]">patterns</h1>
                </Link>
            </div>
            <div class="w-1/3 flex justify-center items-center">
                <Link href="/" className={tangerine.className}>
                    <h1 className="text-[38px] tracking-[0.04em]">tricofaitmain</h1>
                </Link>
            </div>
            <div className="w-1/3 flex justify-end items-center space-x-10">
                <img src={Insta.src} className="w-5 cursor-pointer"></img>
                <img src={Mail.src} className="w-5 cursor-pointer"></img>
                <img src={Panier.src} className="w-5 cursor-pointer"></img>
            </div>
        </header>
        </>
    );
}

export default Index;