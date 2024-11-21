import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GetcharPipe } from '../../pipes/getchar.pipe';
import { Song } from '../../models/Song';
import { GetYearPipe } from '../../pipes/get-year.pipe';
import { SongFormComponent } from '../song-form/song-form.component';

@Component({
  selector: 'app-song-list',
  standalone: true,
  imports: [CommonModule, GetcharPipe, GetYearPipe, SongFormComponent ],
  templateUrl: './song-list.component.html',
  styleUrl: './song-list.component.css'
})
export class SongListComponent {
  @Input() songsList: Song[] = [];
  @Output() deleteSongEvent = new EventEmitter<number>();
  @Output() editDisplaySongEvent = new EventEmitter<number>();
  
  isEditing: boolean = false;
      
  deleteSong(id : number){
    this.deleteSongEvent.emit(id);
  }

  editSong(id : number){
    this.editDisplaySongEvent.emit(id);
  }
}
