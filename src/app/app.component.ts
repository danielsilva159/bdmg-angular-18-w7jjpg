import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { HelloComponent } from './hello.component';
import { ViaCepComponent } from './teste-tecnico/pages/via-cep/via-cep.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, MatInputModule, NgxMaskDirective, NgxMaskPipe, HelloComponent, ViaCepComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'BDMG Teste Frontend';
  panelOpenState: boolean = true;
  @Input() name!: string;
}
