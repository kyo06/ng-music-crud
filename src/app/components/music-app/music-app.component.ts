import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { SongListComponent } from "../song-list/song-list.component";
import { SongFormComponent } from "../song-form/song-form.component";
import { Song } from '../../models/Song';
import { MusicService } from '../../services/music.service';

@Component({
  selector: 'app-music-app',
  standalone: true,
  imports: [CommonModule, SongListComponent, SongFormComponent],
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

  constructor(private musicService: MusicService, private changeDetectorRef: ChangeDetectorRef){
    this.songs = this.musicService.getSongs();
  }

  addOrEditSong(song: Song) {
    if(song.id === 0){
      this.musicService.addSong(song);
    } else{
      this.musicService.editSong(song.id, song);
    }

    this.isDisplayingAddSongForm = false;
    this.isDisplayingEditSongForm = false;
  }

  clickToDelete(id: number): void{
    this.musicService.deleteSong(id);
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
