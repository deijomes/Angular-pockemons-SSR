import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PockemonsListSkeletonComponent } from './pockemons-list-skeleton.component';

describe('PockemonsListSkeletonComponent', () => {
  let component: PockemonsListSkeletonComponent;
  let fixture: ComponentFixture<PockemonsListSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PockemonsListSkeletonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PockemonsListSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
