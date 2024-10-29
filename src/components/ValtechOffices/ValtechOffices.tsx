import styles from "./ValtechOffices.module.css"
import mockedData from '../../data/index.json';
import { Card } from "@/types";
import ValtechOffice from "./ValtechOffice/ValtechOffice"
 

export default function ValtechOffices () {

    const {title,cards} = mockedData.content[1]


  return (
    <section className={styles.Wrapper}>
        {title && <h1>{title}</h1>}
        <div className={styles.Offices}>
        {
          cards && cards.length > 0 ? (
               cards.map((card, index)=>{
                const cardData = card as Card;
              return <ValtechOffice   key={`${cardData.title}-${index}`}
              card={cardData} />
                })
        
          )
          : (
            <p>No result found.</p> 
          )
        }
        </div>
    </section>
  )
}

