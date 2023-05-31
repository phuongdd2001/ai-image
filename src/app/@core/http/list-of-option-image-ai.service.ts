import { Injectable } from '@angular/core';
import {
    ListOfOptionImage,
    OptionImageData,
} from '../data/list-of-option-image';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ListOfOptionImageAiService extends OptionImageData {
    constructor(private httpClient: HttpClient) {
        super();
    }

    getDataOptionImage(): Observable<ListOfOptionImage[]> {
        let url = ' http://localhost:3000/locations';
        return this.httpClient.get<ListOfOptionImage[]>(url);
    }
}
