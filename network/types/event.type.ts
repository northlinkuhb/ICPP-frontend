
export type TGallery={
    id: string;
    imageUrl: string;
};

export type TPastEvent = {
    id: string;
    slug: string;
    onDate: string;
    fromTime: string;
    toTime: string;
    eventName: string;
    eventDescription: string;
    speakers: string[];
    imageUrl: string;
};

export type TEventPageResp = {
    eventsGallery: TGallery[];
    pastEvents: TPastEvent[];
};