import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { ToastrService } from 'ngx-toastr';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import ICep from '../../interfaces/cep.interface';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';
import { ViaCepService } from '../../services/via-cep/via-cep.service';

@Component({
  selector: 'app-via-cep',
  standalone: true,
  imports: [
    NgxMaskDirective,
    NgxMaskPipe,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    InputTextModule,
    FloatLabelModule,
    ButtonModule,
  ],
  templateUrl: './via-cep.component.html',
  styleUrl: './via-cep.component.css',
})
export class ViaCepComponent implements OnInit {
  constructor(
    private viaCepService: ViaCepService,
    private fb: FormBuilder,
    private localStorageService: LocalStorageService,
    private toastrService: ToastrService,
  ) {}

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
    const salvandoCep = this.localStorageService.salvar(this.form.controls.cep.value as string, this.form.value);
    if (salvandoCep) {
      this.toastrService.success('Cep salvo com sucesso no localstorage');
      this.form.reset();
    } else {
      this.toastrService.error('Erro ao tentar salvar no local storage');
    }
  }

  buscarCep(cep: string) {
    this.viaCepService.buscarCep(cep).subscribe({
      next: (data: ICep) => {
        if (data.cep) {
          this.form.setValue(data);
        } else {
          this.toastrService.error('Cep não encontrado');
        }
      },
      error: () => {
        this.toastrService.error('Error ao tentar buscar cep');
      },
    });
  }
}
