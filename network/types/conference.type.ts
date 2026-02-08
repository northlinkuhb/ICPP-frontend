
export type TGallery={
    id: string;
    imageUrl: string;
};

export type TKeySession = {
    id: string;
    slug: string;
    title: string;
    description: string;
    onDate: string;
    fromTime: string;
    toTime: string;
    videoId: string;
    speakers: {
        name: string;
        designation: string;
    }[];
    moderator: {
        name: string;
        designation: string;
    };
};

export type TMediaCard = {
    id: string;
    imageUrl: string;
    title: string;
    description: string;
    mediaLink: string;
};


export type TConferencePageResp = {
    conferenceGallery: TGallery[];
    keySessions: TKeySession[];
    mediaHighlights: TMediaCard[];
    overview: string;
    fromAndToDate: string;
    venue: string;
};