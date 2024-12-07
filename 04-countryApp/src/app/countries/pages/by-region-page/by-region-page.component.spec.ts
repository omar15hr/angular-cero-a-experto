import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuRegionPageComponent } from './by-region-page.component';

describe('BuRegionPageComponent', () => {
  let component: BuRegionPageComponent;
  let fixture: ComponentFixture<BuRegionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuRegionPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuRegionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
