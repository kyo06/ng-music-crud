import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { SongListComponent } from "../song-list/song-list.component";
import { SongFormComponent } from "../song-form/song-form.component";
import { Song } from '../../models/Song';
import { MusicService } from '../../services/music.service';
import { Subscription } from 'rxjs';
import { HighlightDirective } from '../../directives/highlight.directive';
import { ShowAnimationDirective } from '../../directives/show-animation.directive';

@Component({
  selector: 'app-music-app',
  standalone: true,
  imports: [CommonModule, SongListComponent, SongFormComponent, HighlightDirective, ShowAnimationDirective ],
  templateUrl: './music-app.component.html',
  styleUrl: './music-app.component.css'
})
export class MusicAppComponent {
  songs: Song[] = [];
  isDisplayingAddSongForm: boolean = false;
  isDisplayingEditSongForm: boolean = false;
  isEditingForm: boolean = false;
  idForEditForm: number = 0;
  // équivalent de l'autre constructeur
  /*
  private musicService: MusicService;
  constructor(musicService: MusicService){
    this.musicService = musicService;
  }
  */

  /*
  private musicService: MusicService = inject(MusicService);
  constructor(){
    this.songs = this.musicService.getSongs();
  }
  */

  private subscription: Subscription = new Subscription();

  constructor(private musicService: MusicService, private changeDetectorRef: ChangeDetectorRef) {
  }

  //Méthode qui s'exécute lors de l'initialisation du composant
  ngOnInit(): void {
    this.loadSongs();
  }

  loadSongs(): void{
    const subscription = this.musicService.getSongs()
    .subscribe(songs => {
      songs.forEach(song => {
        if(song.date) {
          song.date = new Date(song.date);
        }
      });
      this.songs = songs;
    });
    this.subscription.add(subscription);
  }

  //Méthode qui s'exécute lors de la destruction du composant
  ngOnDestroy(): void {
    //Pour éviter les fuites de mémoire
    this.subscription.unsubscribe();
  }

  addOrEditSong(song: Song) {
    if(song.id === 0){
      const subscription = this.musicService.addSong(song)
      .subscribe(() => {
        this.loadSongs();
      });
      this.subscription.add(subscription);
    } else{
      const subscription = this.musicService.editSong(song.id, song)
      .subscribe(() => {
        this.loadSongs();
      });
      this.subscription.add(subscription);
    }

    this.isDisplayingAddSongForm = false;
    this.isDisplayingEditSongForm = false;
  }

  clickToDelete(id: number): void{
    const subscription = this.musicService.deleteSong(id)
    .subscribe(() => {
      this.loadSongs();
    });
    this.subscription.add(subscription);
  }

  displaySongAddForm(): void{
    this.isDisplayingEditSongForm = false;
    this.isDisplayingAddSongForm = true;
    this.isEditingForm = false;
  }

  displaySongEditForm(id: number): void{
    this.isDisplayingAddSongForm = false;
    this.isDisplayingEditSongForm = false;

    this.changeDetectorRef.detectChanges(); //Forcer le re-render (mise à jour de la vue)

    this.idForEditForm = id;

    this.isDisplayingAddSongForm = false;
    this.isDisplayingEditSongForm = true;
}

}
