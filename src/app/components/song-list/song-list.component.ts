import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GetcharPipe } from '../../pipes/getchar.pipe';
import { Song } from '../../models/Song';
import { GetYearPipe } from '../../pipes/get-year.pipe';

@Component({
  selector: 'app-song-list',
  standalone: true,
  imports: [CommonModule, GetcharPipe, GetYearPipe ],
  templateUrl: './song-list.component.html',
  styleUrl: './song-list.component.css'
})
export class SongListComponent {
  @Input() songsList: Song[] = [];
  @Output() deleteSongEvent = new EventEmitter<number>();

  deleteSong(id : number){
    this.deleteSongEvent.emit(id);
  }
}
