import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SongListComponent } from "../song-list/song-list.component";
import { SongFormComponent } from "../song-form/song-form.component";

@Component({
  selector: 'app-music-app',
  standalone: true,
  imports: [CommonModule, SongListComponent, SongFormComponent],
  templateUrl: './music-app.component.html',
  styleUrl: './music-app.component.css'
})
export class MusicAppComponent {
  songs = [
    { id: 1, title: 'Shape of You', artist: 'Ed Sheeran', genre: 'Pop' },
    { id: 2, title: 'Blinding Lights', artist: 'The Weeknd', genre: 'R&B' },

  ];

 
  addSong(newSong : {title : string; artist : string ; genre : string}){
    const id : number = this.songs.length + 1 ;
    this.songs.push({id, ...newSong})
  }
  clickToDelete(id : number): void{
    this.songs = this.songs.filter(song=> song.id !==id)
  }

}
