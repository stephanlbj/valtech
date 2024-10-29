 import styles from "./Banner.module.css"
 import Image from 'next/image';
 import mockedData from '../../data/index.json';

export default function Banner () {

    const {title,description,backgroundAsset,foregroundAsset} = mockedData.content[0]
 
    return (
    <section className={styles.Wrapper}>
    
        {
            backgroundAsset?.url && (
                <div className={styles.Banner}>
               <Image 
                        src={backgroundAsset.url} 
                        alt={backgroundAsset.alt}
                        fill 
                        className={styles.Image}
                        priority
                    />
                    <div className={styles.TextOverlay}>
                        <h1 className={styles.Title}>{title}</h1>
                        <p className={styles.Description}>{description}</p>
                    </div>
                </div>
            )
        }
  
  {
            foregroundAsset?.url && (
                <div className={styles.Foreground}>
               <Image 
                        src={foregroundAsset.url} 
                        alt={foregroundAsset.alt}
                        fill 
                        className={styles.ForegroundImage}
                        priority
                    />
                   
                </div>
            )
        }
    </section>
  )
}

