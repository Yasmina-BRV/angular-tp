export interface DetailsData {
    name: string
    url: string
}

export interface RamApiI {
    id?: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: DetailsData;
    location: DetailsData;
    image: string;
    episode: string[];
}