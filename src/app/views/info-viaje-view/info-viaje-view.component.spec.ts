import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoViajeViewComponent } from './info-viaje-view.component';

describe('InfoViajeViewComponent', () => {
  let component: InfoViajeViewComponent;
  let fixture: ComponentFixture<InfoViajeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoViajeViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoViajeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
