import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Song } from '../../models/Song';
import { MusicService } from '../../services/music.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-song-form',
  standalone: true,
  imports: [FormsModule, DatePipe],
  templateUrl: './song-form.component.html',
  styleUrl: './song-form.component.css'
})
export class SongFormComponent implements OnInit, OnDestroy {
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

  private subscription: Subscription = new Subscription(); 

  constructor(private musicService: MusicService, private router: Router ){} //Injection de dépendance

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
    this.subscription.unsubscribe();
  }

  onSubmit() {
    const subscription = this.musicService.addSong(this.currentSong).subscribe(() => {
      this.router.navigate(['/']);
    });
    this.subscription.add(subscription);
  }

  //Méthode qui change la date du formulaire
  //date est un string et non un Date !!!
  changeDate(dateStr: string): void{
    const date = new Date(dateStr);
    this.currentSong.date = date;
  }

}
