import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatEvenementComponent } from './creat-evenement.component';

describe('CreatEvenementComponent', () => {
  let component: CreatEvenementComponent;
  let fixture: ComponentFixture<CreatEvenementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatEvenementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
