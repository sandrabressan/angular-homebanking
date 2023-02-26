import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerPg01Component } from './banner-pg01.component';

describe('BannerPg01Component', () => {
  let component: BannerPg01Component;
  let fixture: ComponentFixture<BannerPg01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerPg01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerPg01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
