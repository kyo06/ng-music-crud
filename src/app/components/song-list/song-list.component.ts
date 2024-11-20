import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-song-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './song-list.component.html',
  styleUrl: './song-list.component.css'
})
export class SongListComponent {
  @Input() songsList: { id: number; title: string; artist: string; genre: string }[] = [];
  @Output() deleteSongEvent = new EventEmitter<number>();

  deleteSong(id : number){
    this.deleteSongEvent.emit(id);
  }
}
