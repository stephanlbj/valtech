interface BackgroundAsset {
    url: string;
    alt: string;
    type: string;
}

interface CTA {
    url: string;
    text: string;
    ariaLabel: string;
    target: string;
}

export interface Card {
    type: "CARD";
    title: string;
    subtitle: string;
    description: string;
    backgroundAsset: BackgroundAsset;
    cta: CTA;
}

export type ImageType = {
    url: string;
    alt: string;
    type: string;
} | undefined


export type OptionalString = string | undefined;

export type TypesliderImages = {
    url: string;
    alt: string;
    description: string;
    type: string;
}[] | undefined


