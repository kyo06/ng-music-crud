import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongFormComponent } from './song-form.component';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { MusicService } from '../../services/music.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

describe('SongFormComponent', () => {
  let component: SongFormComponent;
  let fixture: ComponentFixture<SongFormComponent>;
  let musicService: MusicService;
  let httpMock: HttpTestingController;
  let router: Router;
  let route: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SongFormComponent, HttpClientTestingModule],
      providers: [MusicService] 
    })
    .compileComponents();

    musicService = TestBed.inject(MusicService);
    httpMock = TestBed.inject(HttpTestingController);
    router = TestBed.inject(Router);
    route = TestBed.inject(ActivatedRoute);

    fixture = TestBed.createComponent(SongFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
