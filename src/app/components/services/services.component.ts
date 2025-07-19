import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-services',
  imports: [FooterComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

   openWhatsApp(message:any): void {
    const phoneNumber = '+971552067066'; // 🔁 UAE phone number (without + or spaces)
    const fullmessage = `Hello, I am interested in your ${message}.`;
    const encodedMessage = encodeURIComponent(fullmessage);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(url, '_blank');
  }

  makeCall(): void {
  const phoneNumber = '+971552067066'; // 🔁 आपका नंबर, UAE format में (बिना +)
  window.location.href = `tel:${phoneNumber}`;
}


}
