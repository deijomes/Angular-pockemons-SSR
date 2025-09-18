import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PockemonsCardComponent } from './pockemons-card.component';

describe('PockemonsCardComponent', () => {
  let component: PockemonsCardComponent;
  let fixture: ComponentFixture<PockemonsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PockemonsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PockemonsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
