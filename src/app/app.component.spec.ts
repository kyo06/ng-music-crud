import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'music-crud' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const valeurAttendue = 'music-crud';
    const valeurObtenue = app.title;
    expect(valeurObtenue).toEqual(valeurAttendue);
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
    expect(compiled.querySelector('h1')?.textContent).toContain('music-crud');
    app.title = 'Bonjour';
    fixture.detectChanges();
    expect(compiled.querySelector('h1')?.textContent).toContain('Bonjour');
  });
});
