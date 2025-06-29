import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AhorcadoService } from '../ahorcado-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-juego-ahorcado',
  imports: [FormsModule],
  templateUrl: './juego-ahorcado.html',
  styleUrl: './juego-ahorcado.css'
})
export class JuegoAhorcado {
  letra = '';
  constructor(public servicio: AhorcadoService, private router: Router) {}

  probarLetra() {
    this.servicio.adivinar(this.letra);
    this.letra = '';
    if (this.servicio.juegoTerminado) {
      this.router.navigate(['/resultado']);
    }
  }
}
