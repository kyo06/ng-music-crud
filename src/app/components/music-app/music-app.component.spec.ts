import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicAppComponent } from './music-app.component';

describe('MusicAppComponent', () => {
  let component: MusicAppComponent;
  let fixture: ComponentFixture<MusicAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
