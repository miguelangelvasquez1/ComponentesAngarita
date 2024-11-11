import { Component } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { LandingComponent } from '../../components/landing/landing.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-landing-view',
  standalone: true,
  imports: [NavComponent, LandingComponent, FooterComponent],
  templateUrl: './landing-view.component.html',
  styleUrl: './landing-view.component.css'
})
export class LandingViewComponent {

}
