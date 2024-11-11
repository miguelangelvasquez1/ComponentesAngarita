import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisViajesViewComponent } from './mis-viajes-view.component';

describe('MisViajesViewComponent', () => {
  let component: MisViajesViewComponent;
  let fixture: ComponentFixture<MisViajesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MisViajesViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisViajesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
