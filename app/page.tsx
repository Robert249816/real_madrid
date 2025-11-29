import Image from "next/image";
import styles from "./page.module.css";
import Menu from "./navigation/menu";
import Training from "./home/components/training";
import TopBoxCarusels from "./home/components/topBoxCarusels";
import BottomBoxCarusels from "./home/components/bottomBoxCrusels";
import NextEvents from "./home/components/nextEvents";
import CaruselDickRichs from "./home/components/caruselDickRichs";
import ViniJr from "./home/components/viniJr";
import CaruselBasketBilbao from "./home/components/caruselBasketBilbao";
import CaruselGoldenBoot from "./home/components/caruselGoldenBoot";
import ShopNow from "./home/components/shopNow";
import MadridistasComunity from "./home/components/madridistasComunity";
import MadridistasNews from "./home/components/madridistasNews";
import FeaturedCollections from "./home/components/featuredCollections";
import CloserTheGame from "./home/components/closerTheGame";
import RedevelopmentWork from "./home/components/redevelopmentWork";
import SpecialFeatures from "./home/components/specialFeatures";
import Enchanted from "./home/components/enchanted";
import LegendaryTrack from "./home/components/legendaryTrack";

export default function Home() {
  console.log(25);
  return (
    <div className={styles.page}>
      <Training />
      <TopBoxCarusels />
      <BottomBoxCarusels />
      <NextEvents />
      <CaruselDickRichs />
      <ViniJr />
      <CaruselBasketBilbao />
      <CaruselGoldenBoot />
      <ShopNow />
      <MadridistasComunity />
      <MadridistasNews />
      <LegendaryTrack />
      <FeaturedCollections />
      <CloserTheGame />
      <RedevelopmentWork />
      <SpecialFeatures />
      <Enchanted />
    </div>
  );
}
