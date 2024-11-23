import { Component } from '@angular/core';
import { ClienteHttpService } from '../../services/cliente-http.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  mensajes: any;

  constructor(private clientHttp: ClienteHttpService) {}

  ngOnInit(): void {
    this.clientHttp.get(`/mensajes`)
    .subscribe({
      next: (response: any) => {
        console.log('Respuesta recibida:', response);
        this.mensajes = response.data;        
      },
      error: (error) => console.error('Error:', error)
    });
  }
}
