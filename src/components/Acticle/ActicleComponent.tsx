import { OptionalString, TypesliderImages } from "@/types"
import styles from "./Acticle.module.css"
import Slider from "../Slider/Slider"
 



type ArticleProps ={
    author:OptionalString
    publishingDate: OptionalString
    firstParagraph: OptionalString
    secondParagraph:OptionalString
    sliderImages: TypesliderImages
}
 
export default function ActicleComponent ({
    author, publishingDate, firstParagraph, secondParagraph
    ,sliderImages 
} : ArticleProps) {
  return (
    <div className={styles.Article}>

        <div className={styles.PublishedDate}>
           {publishingDate && <p>{publishingDate}</p>}
           {author && <p>{author}</p>}
        </div>

        {firstParagraph && (
            <div
            className={styles.ArticleParagraph}
            dangerouslySetInnerHTML={{ __html: firstParagraph }}  
           />
        )}
       <Slider items={sliderImages}/>

        {
        secondParagraph && (
            <div
            className={styles.ArticleParagraph}
            dangerouslySetInnerHTML={{ __html: secondParagraph }}  
        />
        )
        }

    </div>
  )
}

