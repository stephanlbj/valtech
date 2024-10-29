import BackButton from "@/components/BackButton/BackButton"
import styles from "./page.module.css"
import mockedData from "@/data/article.json"
import DetailBanner from "@/components/DetailBanner/DetailBanner"
import { Metadata } from "next";
import dynamic from 'next/dynamic'


const ActicleComponent = dynamic(() => import('@/components/Acticle/ActicleComponent'))

 
 

export async function generateMetadata(): Promise<Metadata>{
  
  const pageTitle = "Detail page ";
  const pageDescription = "The detail page. this page changes based on the country passed";

  return {
    title: pageTitle,
    description: pageDescription,
  };
}

export default function DetailPage () {

    const {title, subtitle, backgroundAsset, sideAsset, author,
      publishingDate

    } = mockedData.content[0]

    const firstParagraph =  mockedData.content[1]
    const secondParagraph =  mockedData.content[4]
    const images = mockedData.content[3]

    

  return (
    <main className={styles.Wrapper}>
    <BackButton/>
    <DetailBanner 
     backgroundImage={backgroundAsset}
     sideImage={sideAsset}
     title={title}
     subtitle={subtitle}
     />
     <ActicleComponent
     author={author}
     publishingDate={publishingDate}
     firstParagraph={firstParagraph?.text}
     secondParagraph={secondParagraph?.text}
     sliderImages={images?.items}
     />
    </main>
  )
}

