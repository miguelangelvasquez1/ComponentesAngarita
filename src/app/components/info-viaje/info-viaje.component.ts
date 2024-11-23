import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ClienteHttpService } from '../../services/cliente-http.service';

@Component({
  selector: 'app-info-viaje',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-viaje.component.html',
  styleUrl: './info-viaje.component.css'
})
export class InfoViajeComponent implements OnInit {
  viajes: any[] = [];
  id: number | null = null;
  viaje: any = null;

  constructor(
    private route: ActivatedRoute, 
    private clientHttp: ClienteHttpService
  ) {}

  ngOnInit(): void {
    // Obtener el ID de la ruta
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    // Llamada al backend para obtener los viajes
    this.clientHttp.get(`/info-viajes`)
      .subscribe({
        next: (response: any) => {
          this.viajes = response.data;

          // Buscar el viaje con el ID correspondiente después de obtener los datos
          this.viaje = this.viajes.find(viaje => viaje.id === this.id);
          console.log("Id pasado viaje ", this.id, this.viaje);
        },
        error: (error) => console.error('Error:', error)
      });
  }
}
