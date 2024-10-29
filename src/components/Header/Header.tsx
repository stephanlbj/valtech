import Image from 'next/image';
import styles from "./header.module.css"
import Logo from "../../../public/images/logo.svg"
import Link from 'next/link';

export default function Header ()  {

    
  return (
   <header className={styles.Container}>
     
     <Link href={`/`} aria-label='Valtech homepage'>
     <Image 
          src={Logo} 
          alt="Valtech logo"
          className={styles.Logo}
          width={181}
          height={40}
          priority/> 
     </Link>
       
   </header>
  )
}

