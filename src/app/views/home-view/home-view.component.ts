import { Component } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { HomeComponent } from '../../components/home/home.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [NavComponent, HomeComponent, FooterComponent],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.css'
})
export class HomeViewComponent {

}
