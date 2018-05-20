import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusonComponent } from './focuson.component';

describe('FocusonComponent', () => {
  let component: FocusonComponent;
  let fixture: ComponentFixture<FocusonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FocusonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FocusonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
