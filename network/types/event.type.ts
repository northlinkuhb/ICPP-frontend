
export type TGallery={
    id: string;
    imageUrl: string;
};

export type TPastEvent = {
    id: string;
    slug: string;
    date: string;
    time: string;
    eventName: string;
    eventDescription: string;
    speakers: string[];
};

export type TEventPageResp = {
    eventsGallery: TGallery[];
    pastEvents: TPastEvent[];
};