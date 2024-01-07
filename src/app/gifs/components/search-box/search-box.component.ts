import { Component } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar:</h5>
  <input type="text" 
    class="form-control"
    placeholder = "Buscar gifs..."
    (keyup.enter)="searchTag( txtTagInput.value )"
    #txtTagInput>
  `,
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  public searchTag( newTag: string ): void {
    console.log({newTag})
  }

}
