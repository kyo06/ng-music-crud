import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { GetcharPipe } from '../../pipes/getchar.pipe';
import { Song } from '../../models/Song';
import { GetYearPipe } from '../../pipes/get-year.pipe';
import { SongFormComponent } from '../song-form/song-form.component';
import { MusicService } from '../../services/music.service';
import { Subscription } from 'rxjs';

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

  private musicService = inject(MusicService);
  private subscription = new Subscription();  
      
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  deleteSong(id : number){
    this.deleteSongEvent.emit(id);
  }

  editSong(id : number){
    this.editDisplaySongEvent.emit(id);
  }

  likeSong(id: number, liked: boolean){
    const subscription = this.musicService.likeSong(id, liked)
    .subscribe(() => {
      this.songsList.find(song => song.id === id)!.liked = liked;
    });
    this.subscription.add(subscription);
  }
}
