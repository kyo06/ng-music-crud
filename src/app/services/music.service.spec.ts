import { TestBed } from '@angular/core/testing';

import { MusicService } from './music.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { Song } from '../models/Song';

const mockSongs: Song[] = [
  {
    id: 1,
    title: 'Bohemian Rhapsody',
    artist: 'Queen',
    genre: 'Rock',
    date: new Date('1975-10-31'),
    liked: false
  },
  {
    id: 2, 
    title: 'Billie Jean',
    artist: 'Michael Jackson',
    genre: 'Pop',
    date: new Date('1983-01-02'),
    liked: true
  },
  {
    id: 3,
    title: 'Sweet Child O\' Mine',
    artist: 'Guns N\' Roses', 
    genre: 'Rock',
    date: new Date('1987-08-17'),
    liked: false
  }
];

describe('MusicService', () => {
  let service: MusicService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
    });
    service = TestBed.inject(MusicService);
    httpMock = TestBed.inject(HttpTestingController);  
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get songs', () => {
    service.getSongs().subscribe((songs) => {
      expect(songs).toEqual(mockSongs);
    });

    const req = httpMock.expectOne('http://localhost:3000/songs');
    expect(req.request.method).toBe('GET');
    req.flush(mockSongs);
  });
});
