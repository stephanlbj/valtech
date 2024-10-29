'use client' 
 
import { useEffect } from 'react'
import styles from "@/components/Loading/Loading.module.css"
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <div className={styles.Wrapper}>
      <h2>Something went wrong!</h2>
      <button
        onClick={
           () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}