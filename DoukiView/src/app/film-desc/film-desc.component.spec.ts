import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmDescComponent } from './film-desc.component';

describe('FilmDescComponent', () => {
  let component: FilmDescComponent;
  let fixture: ComponentFixture<FilmDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
