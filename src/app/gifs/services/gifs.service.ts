import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

const GIPHY_API_KEY: string = 'FIGHOVPdMLVtPO5o4t91jO8Ghmp9Ea29';

@Injectable({providedIn: 'root'})
export class GifsService {
    
    public gifList: Gif[] = [];
    private _tagsHistory:   string[] = [];
    private serviceUrl:     string = 'https://api.giphy.com/v1/gifs';

    constructor( private http: HttpClient ) { 
        this.loadLocalStorage();
     }

    private organizeHistory( tag: string ): void {
        if( tag.length === 0 ) return;
        tag = tag.toLowerCase();
        // borrar el tag anterior
        if( this.getTagsHistory.includes(tag) ) {
            this._tagsHistory = this._tagsHistory.filter( (oldTag) => oldTag !== tag )
        }
        this._tagsHistory.unshift( tag );
        this._tagsHistory = this._tagsHistory.splice(0,10);
        this.saveLocalStorage();
    }

    public searchTag( tag: string ): void {
        this.organizeHistory( tag );

        const params = new HttpParams()
        .set('api_key', GIPHY_API_KEY)
        .set('limit', '10')
        .set('q', tag)

        this.http.get<SearchResponse>(`${this.serviceUrl}/search`, { params })
        .subscribe( resp => {
            this.gifList = resp.data;
        } )
    }

    private saveLocalStorage(): void {
        localStorage.setItem('history',  JSON.stringify(this._tagsHistory));
    }

    private loadLocalStorage(): void {
        if( !localStorage.getItem('history') ) return;
        this._tagsHistory = JSON.parse( localStorage.getItem('history')! );
        if( this._tagsHistory.length === 0 ) return;
        this.searchTag( this._tagsHistory[0] );
    }

    // Getters and setters
    /**
     * los arreglos paran por referencia en js
     * [] esta sintaxis no es obligatoria se usa para no romper la referencia
     * y crear una copia de la variable
     */
    get getTagsHistory() {
        return [...this._tagsHistory];
    }
    
}