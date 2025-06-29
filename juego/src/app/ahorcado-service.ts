import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AhorcadoService {
  dibujos = [
    `  +---+  \n  |   |  \n      |  \n      |  \n      |  \n      |  \n========= `,
    `  +---+  \n  |   |  \n  O   |  \n      |  \n      |  \n      |  \n========= `,
    `  +---+  \n  |   |  \n  O   |  \n  |   |  \n      |  \n      |  \n========= `,
    `  +---+  \n  |   |  \n  O   |  \n /|   |  \n      |  \n      |  \n========= `,
    `  +---+  \n  |   |  \n  O   |  \n /|\\  |  \n      |  \n      |  \n========= `,
    `  +---+  \n  |   |  \n  O   |  \n /|\\  |  \n /    |  \n      |  \n========= `,
    `  +---+  \n  |   |  \n  O   |  \n /|\\  |  \n / \\  |  \n      |  \n========= `
  ];

  palabra: string = '';
  errores: number = 0;
  letrasUsadas: string[] = [];
  progreso: string[] = [];

  reiniciar(palabra: string) {
    this.palabra = palabra.toLowerCase();
    this.errores = 0;
    this.letrasUsadas = [];
    this.progreso = Array(palabra.length).fill('_');
  }
}
