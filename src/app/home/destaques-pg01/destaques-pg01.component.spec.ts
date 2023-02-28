import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestaquesPg01Component } from './destaques-pg01.component';

describe('DestaquesPg01Component', () => {
  let component: DestaquesPg01Component;
  let fixture: ComponentFixture<DestaquesPg01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestaquesPg01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestaquesPg01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
