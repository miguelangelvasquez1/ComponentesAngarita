import { Component } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { RegisterComponent } from '../../components/register/register.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-register-view',
  standalone: true,
  imports: [NavComponent, RegisterComponent, FooterComponent],
  templateUrl: './register-view.component.html',
  styleUrl: './register-view.component.css'
})
export class RegisterViewComponent {

}
