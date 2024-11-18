import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adopcion-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './adopcion-form.component.html',
  styleUrl: './adopcion-form.component.css'
})
export class AdopcionFormComponent {
  adopciontForm: FormGroup;
  messageSent = false;

  constructor(private fb: FormBuilder) {
    this.adopciontForm = this.fb.group({
      nombreanimal: ['', Validators.required],
      tipoanimal: ['', Validators.required],
      edadanimal: ['', Validators.required],
      sexoanimal: ['', Validators.required],
      tiemporefugio: ['', Validators.required],
      urgenciaanimal: ['', Validators.required],
      descripcionanimal: ['', Validators.required],
      observacionesanimal: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.adopciontForm.valid) {
      const formData = this.adopciontForm.value;

      // Aquí es donde podrías enviar los datos a un servidor o servicio de correo electrónico.
      console.log('Datos del formulario:', formData);

      this.messageSent = true;
      setTimeout(() => (this.messageSent = false), 3000); // Ocultar después de 3 segundos
    }
  }
}