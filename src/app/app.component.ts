import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MusicAppComponent } from './components/music-app/music-app.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MusicAppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'music-crud';
}
