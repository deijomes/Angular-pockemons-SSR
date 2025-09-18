import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PockemonComponent } from './pockemon.component';

describe('PockemonComponent', () => {
  let component: PockemonComponent;
  let fixture: ComponentFixture<PockemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PockemonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PockemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
