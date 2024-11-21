import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Song } from '../../models/Song';

@Component({
  selector: 'app-song-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './song-form.component.html',
  styleUrl: './song-form.component.css'
})
export class SongFormComponent {
  @Output() addSong = new EventEmitter<Omit<Song, 'id'>>();

  newSong: Omit<Song, 'id'> = {
    title : "",
    artist : "" ,
    genre : "",
    date : new Date()
  }
  onSubmit(){ 
    this.addSong.emit(this.newSong);
    this.newSong = {
      title : "",
      artist : "",
      genre : "",
      date : new Date()
    }
  }

}
