import { Observable } from "rxjs";

export interface ListOfOptionImage {
    title: string;
    des: string;
    trend: boolean;
    linkImage: string;
    linkURL: string;
    value: string;
}

export abstract class OptionImageData {
    abstract getDataOptionImage(): Observable<ListOfOptionImage[]>;
}
