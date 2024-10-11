import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCepComponent } from './input-cep.component';
import { CommonModule } from '@angular/common';
import { provideNgxMask } from 'ngx-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('InputCepComponent', () => {
  let component: InputCepComponent;
  let fixture: ComponentFixture<InputCepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputCepComponent, ReactiveFormsModule],
      providers: [provideNgxMask()],
    }).compileComponents();

    fixture = TestBed.createComponent(InputCepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
