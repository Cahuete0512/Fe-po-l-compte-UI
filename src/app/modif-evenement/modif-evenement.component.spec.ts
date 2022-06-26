import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifEvenementComponent } from './modif-evenement.component';

describe('ModifEvenementComponent', () => {
  let component: ModifEvenementComponent;
  let fixture: ComponentFixture<ModifEvenementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifEvenementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
