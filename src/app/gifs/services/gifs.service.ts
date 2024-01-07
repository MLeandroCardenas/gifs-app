import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GifsService {

    private _tagsHistory: string[] = [];

    constructor() { }

    private organizeHistory( tag: string ): void {
        if( tag.length === 0 ) return;
        tag = tag.toLowerCase();
        // borrar el tag anterior
        if( this.getTagsHistory.includes(tag) ) {
            this._tagsHistory = this._tagsHistory.filter( (oldTag) => oldTag !== tag )
        }
        this._tagsHistory.unshift( tag );
        this._tagsHistory = this._tagsHistory.splice(0,10);
    }

    public searchTag( tag: string ): void {
        this.organizeHistory( tag );
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