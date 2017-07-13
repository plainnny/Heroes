import { TestBed, async } from '@angular/core/testing';

<<<<<<< HEAD
import { HeroesComponent } from './heroes.component';
=======
import { AppComponent } from './app.component';
>>>>>>> chore: initial commit from @angular/cli

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
<<<<<<< HEAD
        HeroesComponent
=======
        AppComponent
>>>>>>> chore: initial commit from @angular/cli
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
<<<<<<< HEAD
    const fixture = TestBed.createComponent(HeroesComponent);
=======
    const fixture = TestBed.createComponent(AppComponent);
>>>>>>> chore: initial commit from @angular/cli
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
<<<<<<< HEAD
    const fixture = TestBed.createComponent(HeroesComponent);
=======
    const fixture = TestBed.createComponent(AppComponent);
>>>>>>> chore: initial commit from @angular/cli
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  it('should render title in a h1 tag', async(() => {
<<<<<<< HEAD
    const fixture = TestBed.createComponent(HeroesComponent);
=======
    const fixture = TestBed.createComponent(AppComponent);
>>>>>>> chore: initial commit from @angular/cli
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!!');
  }));
});
