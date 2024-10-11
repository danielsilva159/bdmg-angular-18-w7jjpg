import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-input-cep',
  standalone: true,
  imports: [FormsModule, InputTextModule, FloatLabelModule, ReactiveFormsModule, NgxMaskDirective, NgxMaskPipe, CommonModule],
  templateUrl: './input-cep.component.html',
  styleUrl: './input-cep.component.css',
})
export class InputCepComponent {
  @Input() form!: FormGroup; // Recebe o FormGroup do formulário principal
  @Input() campo!: string; // Nome do FormControl
  @Input() label!: string; // Rótulo do campo
  @Input() tipo: string = 'text'; // Tipo de input (padrão: text)
  @Input() obrigatorio: boolean = true; // Se o campo é obrigatório
  @Input() mascara = '';
  @Input() readOnly = false;

  isInvalid() {
    const control = this.form.get(this.campo);

    return control?.invalid && control?.touched;
  }
}
