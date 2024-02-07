import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayDindingComponent } from './two-way-dinding.component';

describe('TwoWayDindingComponent', () => {
  let component: TwoWayDindingComponent;
  let fixture: ComponentFixture<TwoWayDindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TwoWayDindingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwoWayDindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
