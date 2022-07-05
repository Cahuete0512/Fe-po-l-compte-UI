import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenementListComponent } from './evenementList.component';

describe('EvenementComponent', () => {
  let component: EvenementListComponent;
  let fixture: ComponentFixture<EvenementListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvenementListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvenementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
