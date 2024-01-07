import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GifsService {

    private _tagsHistory: string[] = [];

    constructor() { }

    public searchTag( tag: string ): void {
        this._tagsHistory.unshift( tag );
    }

    // Getters and setters
    /**
     * los arreglos paran por referencia en js
     * [] esta sintaxis no es obligatoria se usa para no romper la referencia
     * y crear una copia de la variable
     */
    get tagsHistory() {
        return [...this._tagsHistory];
    }
    
}