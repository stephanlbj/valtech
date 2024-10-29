import { ImageType, OptionalString } from "@/types";
import styles from "./DetailBanner.module.css"
import Image from 'next/image';


type DetailProps ={
    backgroundImage: ImageType
    sideImage: ImageType
    title: OptionalString
    subtitle: OptionalString

}
export default function DetailBanner ({backgroundImage, sideImage, title, subtitle}:DetailProps) {
  return (
    <section className={styles.Wrapper}>
        
        {
            backgroundImage?.url && (
                <div className={styles.BackgroundImage}>
               <Image 
                        src={backgroundImage.url} 
                        alt={backgroundImage.alt}
                        fill 
                        className={styles.Image}
                        priority
                    />
                    <div className={styles.TextOverlay}>
                        <h1 className={styles.Title}>{subtitle}</h1>
                        <p className={styles.Description}>{title}</p>
                    </div>
                </div>
            )
        }

{
            sideImage?.url && (
                <div className={styles.SideImage}>
               <Image 
                        src={sideImage.url} 
                        alt={sideImage.alt}
                        fill 
                        className={styles.Image}
                        priority
                    />
                    
                </div>
            )
        }
    </section>
  )
}

