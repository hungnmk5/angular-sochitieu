import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTransactionComponent } from './edittransaction.component';

describe('EditTransactionComponent', () => {
  let component: EditTransactionComponent;
  let fixture: ComponentFixture<EditTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditTransactionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});