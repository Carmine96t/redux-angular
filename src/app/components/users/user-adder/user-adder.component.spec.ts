import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAdderComponent } from './user-adder.component';

describe('UserAdderComponent', () => {
  let component: UserAdderComponent;
  let fixture: ComponentFixture<UserAdderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAdderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
