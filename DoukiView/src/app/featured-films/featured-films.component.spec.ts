import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedFilmsComponent } from './featured-films.component';

describe('FeaturedFilmsComponent', () => {
  let component: FeaturedFilmsComponent;
  let fixture: ComponentFixture<FeaturedFilmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedFilmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
