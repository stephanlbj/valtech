 import { Card } from "@/types"
import styles from "./ValtechOffice.module.css"
import Image from 'next/image';
import Link from "next/link";


type ValtechOfficeprops ={
    card: Card
}
 
export default function ValtechOffice({card}: ValtechOfficeprops) {
  return (
    <div className={styles.Card}>
               <Image 
                        src={card.backgroundAsset.url} 
                        alt={card.backgroundAsset.alt}
                        fill 
                        className={styles.Image}
                        priority
                    />
                  <div className={styles.CardContext}>
                  <div className={styles.TextOverlay}>
                      <h1 className={styles.Subtitle}>{card.subtitle}</h1>
                        <h2 className={styles.Title}>{card.title}</h2>
                        <p className={styles.Description}>{card?.description}</p>
                   </div>

                     {
                    card?.cta && card?.cta?.url && (
                        <Link href={`${card?.cta?.url}/${card.title}`}
                        className={styles.Cta} 
                         aria-label={card.cta.ariaLabel}>
                        {card.cta.text}
                        </Link>
                    ) 
                }
                  </div>
               
                
               
    </div>
  )
}

