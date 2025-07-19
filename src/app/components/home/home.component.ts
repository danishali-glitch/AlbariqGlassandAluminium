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
  
  openWhatsApp(): void {
    const phoneNumber = '+971552067066'; // 🔁 UAE phone number (without + or spaces)
    const message = 'Hello, I am interested in your glass and aluminium services.';
    
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(url, '_blank');
  }

}
