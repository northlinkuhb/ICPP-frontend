export type TBanner = {
    id: string;
    imageUrl: string;
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
}

export type TResearchCard = {
        id: string;
        slug: string;
        title: string;
        author: {
            id: string;
            name: string;
        };
        createdAt: string;
        imageUrl: string;
    }

export type TGallery={
    id: string;
    imageUrl: string;
};

export type TAdvisoryCard = {
    id: string;
    slug: string;
    name: string;
    designation: string;
    imageUrl: string;
    desc: string;
    linkedIn: string;
    website: string;
    readMore: string;
};

export type TViewpointCard = {
    id: string;
    videoId: string;
    title: string;
    category: string;
    author: {
        id: string;
        name: string;
    };
    createdAt: string;
};

export type TMediaCard = {
    id: string;
    imageUrl: string;
    title: string;
    description: string;
    mediaLink: string;
};

export type THomePageResp = {
    banners: TBanner[];
    researches: TResearchCard[];
    policies: TResearchCard[];
    eventsGallery:TGallery[];
    advisories: TAdvisoryCard[];
    viewpoints: TViewpointCard[];
    medias: TMediaCard[];
};