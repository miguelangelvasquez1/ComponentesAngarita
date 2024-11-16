import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mis-viajes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mis-viajes.component.html',
  styleUrl: './mis-viajes.component.css'
})
export class MisViajesComponent {

  viajes=[
    {id: 1, destino: "Centro de la ciudad", fecha: "2024-11-01", conductor: "Andrés", calificacion: 5.0, urlImg: ""},
    {id: 2, destino: "Aeropuerto", fecha: "2024-11-01", conductor: "Nicolás", calificacion: 5.0, urlImg: ""},
    {id: 3, destino: "Terminal de buses", fecha: "2024-11-01", conductor: "Arturo", calificacion: 5.0, urlImg: ""},
    {id: 4, destino: "Salento", fecha: "2024-11-01", conductor: "Andrea", calificacion: 5.0, urlImg: ""},
    {id: 5, destino: "Circasia", fecha: "2024-11-01", conductor: "Juan", calificacion: 5.0, urlImg: ""}
  ];
}
