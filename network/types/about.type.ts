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

export type TAboutPageResp = {
    advisories: TAdvisoryCard[];
    fellows: TAdvisoryCard[];
    ourTeams: TAdvisoryCard[];
};