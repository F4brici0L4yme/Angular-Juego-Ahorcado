import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AhorcadoService } from '../ahorcado-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resultado',
  imports: [CommonModule],
  templateUrl: './resultado.html',
  styleUrl: './resultado.css'
})
export class Resultado {
  constructor(public servicio: AhorcadoService, private router: Router) {}
  reiniciar() {
    this.router.navigate(['/']);
  }
}

