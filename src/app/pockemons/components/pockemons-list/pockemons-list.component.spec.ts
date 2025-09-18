import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PockemonsListComponent } from './pockemons-list.component';

describe('PockemonsListComponent', () => {
  let component: PockemonsListComponent;
  let fixture: ComponentFixture<PockemonsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PockemonsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PockemonsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
