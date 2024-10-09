import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import ICep from '../../interfaces/cep.interface';
import { ViaCepService } from '../../services/via-cep/via-cep.service';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';

@Component({
  selector: 'app-via-cep',
  standalone: true,
  imports: [MatInputModule, NgxMaskDirective, NgxMaskPipe, FormsModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './via-cep.component.html',
  styleUrl: './via-cep.component.css',
})
export class ViaCepComponent implements OnInit {
  constructor(private viaCepService: ViaCepService, private fb: FormBuilder, private localStorageService: LocalStorageService) {}

  form = this.fb.group({
    cep: ['', [Validators.required]],
    logradouro: ['', [Validators.required]],
    complemento: ['', [Validators.required]],
    unidade: ['', [Validators.required]],
    bairro: ['', [Validators.required]],
    localidade: ['', [Validators.required]],
    uf: ['', [Validators.required]],
    estado: ['', [Validators.required]],
    regiao: ['', [Validators.required]],
    ibge: ['', [Validators.required]],
    gia: ['', [Validators.required]],
    ddd: ['', [Validators.required]],
    siafi: ['', [Validators.required]],
  });

  ngOnInit(): void {
    this.buscarCep('30160907');
  }

  salvarCep() {
    this.localStorageService.salvar(this.form.controls.cep.value as string, this.form.value);
  }

  buscarCep(cep: string) {
    this.viaCepService.buscarCep(cep).subscribe((data: ICep) => {
      this.form.setValue(data);
    });
  }
}
