import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormComponentComponent } from './form-component.component';

describe('FormComponentComponent', () => {
  let component: FormComponentComponent;
  let fixture: ComponentFixture<FormComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormComponentComponent]
    });
    fixture = TestBed.createComponent(FormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
