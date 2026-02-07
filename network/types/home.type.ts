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

export type THomePageResp = {
    researches: TResearchCard[];
    policies: TResearchCard[];
    advisories: TAdvisoryCard[];
};