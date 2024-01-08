import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  public tagsHistory: string[] = [];

  constructor(private gifsService: GifsService) {}

  public searchgGif( gif: string ) {
    this.gifsService.searchTag( gif );
  }

  get getTags(): string[] {
    return this.gifsService.getTagsHistory;
  }
}
