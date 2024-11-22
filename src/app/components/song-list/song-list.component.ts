import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { GetcharPipe } from '../../pipes/getchar.pipe';
import { Song } from '../../models/Song';
import { GetYearPipe } from '../../pipes/get-year.pipe';
import { MusicService } from '../../services/music.service';
import { Subscription } from 'rxjs';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-song-list',
  standalone: true,
  imports: [CommonModule, GetcharPipe, GetYearPipe, RouterModule],
  templateUrl: './song-list.component.html',
  styleUrl: './song-list.component.css'
})
export class SongListComponent {
  @Input() songsList: Song[] = [];

  private musicService = inject(MusicService);
  private subscription = new Subscription();  
  private router = inject(Router);
      
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  deleteSong(id : number){
    const subscription = this.musicService.deleteSong(id).subscribe(() => {
      window.location.reload(); //force la rechargement de la page car on est sur la même page
    });
    this.subscription.add(subscription);
  }

  editSong(id : number){
    this.router.navigate(['/edit', id]);
  }

  likeSong(id: number, liked: boolean){
    const subscription = this.musicService.likeSong(id, liked)
    .subscribe(() => {
      this.songsList.find(song => song.id === id)!.liked = liked;
    });
    this.subscription.add(subscription);
  }
}
