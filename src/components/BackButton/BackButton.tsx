 "use client"

import styles from "./BackButton.module.css"
import {HiArrowSmLeft} from "../../icons/index"
import Link from 'next/link';
import { useRouter } from "next/navigation";


export default function BackButton () {

    const router = useRouter()

  return (
    <Link href="/"  aria-label="go back button" passHref className={styles.Link}>
        <div role="button" className={styles.BackBtn} onClick={()=>router.back()} >
        <HiArrowSmLeft arial-hidden="true"/>
        <p>Back</p>
        </div>
    </Link>
  )
}

