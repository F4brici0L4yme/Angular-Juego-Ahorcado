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

  adivinar(letra: string): boolean {
    letra = letra.toLowerCase();
    if (this.letrasUsadas.includes(letra)) return false;
    this.letrasUsadas.push(letra);
    let acierto = false;
    for (let i = 0; i < this.palabra.length; i++) {
      if (this.palabra[i] === letra) {
        this.progreso[i] = letra;
        acierto = true;
      }
    }
    if (!acierto) this.errores++;
    return acierto;
  }

  get dibujo(): string {
    return this.dibujos[Math.min(this.errores, this.dibujos.length - 1)];
  }

  get juegoTerminado(): boolean {
    return this.errores >= 6 || this.progreso.join('') === this.palabra;
  }

  get victoria(): boolean {
    return this.progreso.join('') === this.palabra;
  }
}
