import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(
    private router: Router,
  ) { }
  view() {
    this.router.navigate(['/services']);
  }

}
