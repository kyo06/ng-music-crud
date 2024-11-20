import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-song-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './song-form.component.html',
  styleUrl: './song-form.component.css'
})
export class SongFormComponent {
  @Output() addSong = new EventEmitter<{title : string; artist : string ; genre : string} >();

  newSong = {
    title : "",
    artist : "" ,
    genre : ""
  }
  onSubmit(){
    this.addSong.emit(this.newSong);
    this.newSong ={
      title : "",
      artist : "" ,
      genre : ""
    }
  }

}
