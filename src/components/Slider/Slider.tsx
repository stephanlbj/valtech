"use client";

import { TypesliderImages } from "@/types";
import styles from "./Slider.module.css";
import Image from "next/image";
import { HiArrowSmLeft, HiArrowSmRight } from "../../icons/index";
import { useState } from "react";

type SliderProps = {
    items?: TypesliderImages;
};

export default function Slider({ items = [] }: SliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    };

    const next = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
    };

   

    return (
        <div className={styles.Slider}>
            {items.map((item, index) => {

                return <div
                key={`${item.alt}-${index}`}
                className={`${styles.SliderImg} 
                 ${ index === currentIndex ? styles.active : styles.hidden} `}
            >
                <Image
                    src={item.url}
                    alt={item.alt}
                    className={styles.Image}
                    fill
                    priority
                />

            <div className={styles.SliderBtn}>
                    <button onClick={prev} aria-label="button to see the previous slide">
                        <HiArrowSmLeft aria-hidden="true" />
                    </button>
                    <button onClick={next} aria-label="button to see the next  slide">
                        <HiArrowSmRight aria-hidden="true"/>
                    </button>
                </div>

                <p className={styles.SliderParagraph}>
                  {item.description} <span>{index} Slider</span>
                </p>
            </div>
            }
                
            )}
        </div>
    );
}
