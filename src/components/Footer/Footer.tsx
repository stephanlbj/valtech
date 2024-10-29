import styles from "./Footer.module.css"
import mockedData from "../../data/index.json"
import Image from 'next/image';

export default function Footer () {

    const {background, text} = mockedData.footer
  return (
    <footer className={styles.Footer}>
                    <Image 
                        src={background} 
                        alt={`footer image`}
                        fill 
                        className={styles.Image}
                        priority
                    />
            <p className={styles.Footertext}>{text}</p>
 
    </footer>
  )
}

