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

export type TGallery={
    id: string;
    imageUrl: string;
};

export type TTestimonial = {
    id: string;
    name: string;
    designation: string;
    feedback: string;
};

export type TAboutPageResp = {
    advisories: TAdvisoryCard[];
    fellows: TAdvisoryCard[];
    ourTeams: TAdvisoryCard[];
    commonGallery: TGallery[];
    testimonials: TTestimonial[];
};