import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, provideHttpClientTesting } from '@angular/common/http/testing';

import { ViaCepComponent } from './via-cep.component';
import { provideHttpClient } from '@angular/common/http';
import { ToastrService, provideToastr } from 'ngx-toastr';
import { provideNgxMask } from 'ngx-mask';
import { ViaCepService } from '../../services/via-cep/via-cep.service';
import { of } from 'rxjs';
import { mockCep } from '../../../mocks/dados.mock';

describe('ViaCepComponent', () => {
  let component: ViaCepComponent;
  let fixture: ComponentFixture<ViaCepComponent>;
  let mockViaCepService: Partial<ViaCepService>;

  beforeEach(async () => {
    mockViaCepService = {
      buscarCep: () => of(mockCep),
    };
    await TestBed.configureTestingModule({
      imports: [ViaCepComponent],
      providers: [
        provideHttpClientTesting(),
        provideHttpClient(),
        provideToastr(),
        ToastrService,
        provideNgxMask(),
        { provide: ViaCepService, useValue: mockViaCepService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ViaCepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('expects salvarCep() to have been called', () => {
    spyOn(component, 'salvarCep').and.callThrough();
    component.salvarCep();
    expect(component.salvarCep).toHaveBeenCalled();
  });
});
