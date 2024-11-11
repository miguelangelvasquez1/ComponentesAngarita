import { Component } from '@angular/core';
import { NavComponent } from "../../components/nav/nav.component";
import { InfoViajeComponent } from "../../components/info-viaje/info-viaje.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-info-viaje-view',
  standalone: true,
  imports: [NavComponent, InfoViajeComponent, FooterComponent],
  templateUrl: './info-viaje-view.component.html',
  styleUrl: './info-viaje-view.component.css'
})
export class InfoViajeViewComponent {

}
