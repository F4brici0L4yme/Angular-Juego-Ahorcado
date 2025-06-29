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
}
