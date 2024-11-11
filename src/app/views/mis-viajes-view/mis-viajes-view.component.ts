import { Component } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { MisViajesComponent } from "../../components/mis-viajes/mis-viajes.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-mis-viajes-view',
  standalone: true,
  imports: [MisViajesComponent, FooterComponent, NavComponent],
  templateUrl: './mis-viajes-view.component.html',
  styleUrl: './mis-viajes-view.component.css'
})
export class MisViajesViewComponent {

}
