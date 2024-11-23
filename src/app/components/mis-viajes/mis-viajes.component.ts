import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClienteHttpService } from '../../services/cliente-http.service';

@Component({
  selector: 'app-mis-viajes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mis-viajes.component.html',
  styleUrl: './mis-viajes.component.css'
})
export class MisViajesComponent {

  viajes: any;

  constructor(private clientHttp: ClienteHttpService) {}

  ngOnInit(): void {
    this.clientHttp.get(`/viajes`)
    .subscribe({
      next: (response: any) => {
        this.viajes = response.data;
      },
      error: (error) => console.error('Error:', error)
    });
  }
}
