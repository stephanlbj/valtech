import { Metadata } from "next";
import Banner from "@/components/Banner/Banner";
import dynamic from 'next/dynamic'

const ValtechOffices = dynamic(() => import('@/components/ValtechOffices/ValtechOffices'));

export async function generateMetadata(): Promise<Metadata>{
  
  const pageTitle = "Home ";
  const pageDescription = "Welcome to the !!!!";

  return {
    title: pageTitle,
    description: pageDescription,
  };
}


export default function Home() {

  return (
    <main >
      <Banner/>
      <ValtechOffices/>
    </main>
    

  );
}
