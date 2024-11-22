import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Song } from '../../models/Song';
import { MusicService } from '../../services/music.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-song-form',
  standalone: true,
  imports: [FormsModule, DatePipe],
  templateUrl: './song-form.component.html',
  styleUrl: './song-form.component.css'
})
export class SongFormComponent implements OnInit, OnDestroy {
  @Output() addOrEditSong = new EventEmitter<Song>();

  @Input() isEditing: boolean = false;
  @Input() idForEditForm: number = 0;

  currentSong: Song = {
    id: 0,
    title : "",
    artist : "" ,
    genre : "",
    date : new Date(),
    liked: false
  };

  constructor(private musicService: MusicService){} //Injection de dépendance

  //Méthode qui s'exécute lors de l'initialisation du composant
  ngOnInit(): void {
    if(this.isEditing){
      this.musicService.getSongById(this.idForEditForm).subscribe(song => {
        if(song){
          this.currentSong = song;
        }
      });
    }
  }

  //Méthode qui s'exécute lors de la destruction du composant
  ngOnDestroy(): void {
  }

  onSubmit(){ 
    this.addOrEditSong.emit(this.currentSong);
    this.currentSong = {
      id: 0,
      title : "",
      artist : "",
      genre : "",
      date : new Date(),
      liked: false
    }
  }

  //Méthode qui change la date du formulaire
  //date est un string et non un Date !!!
  changeDate(dateStr: string): void{
    const date = new Date(dateStr);
    this.currentSong.date = date;
  }

}
