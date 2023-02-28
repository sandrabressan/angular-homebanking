import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RodapePg01Component } from './rodape-pg01.component';

describe('RodapePg01Component', () => {
  let component: RodapePg01Component;
  let fixture: ComponentFixture<RodapePg01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RodapePg01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RodapePg01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
