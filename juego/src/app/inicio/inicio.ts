import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AhorcadoService } from '../ahorcado-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  imports: [FormsModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio {
  palabra = '';
  constructor(private servicio: AhorcadoService, private router: Router) {}
  iniciarJuego() {
    this.servicio.reiniciar(this.palabra);
    this.router.navigate(['/juego']);
  }
}
