import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(
    private router: Router,
    private meta: Meta,
    private title: Title
  ) {

    this.meta.addTags([
      { name: 'description', content: 'Your description here' },
      { name: 'keywords', content: 'keyword1, keyword2, keyword3' },
      { name: 'author', content: 'Your Name' }
    ]);
    this.title.setTitle('Albariq Glass & Aluminium | Home');

  }
  navigate(navigate: any) {
    if (navigate === '/') {
      this.router.navigate(['/']);
    } if (navigate === '/services') {
      this.router.navigate(['/services']);
    } else if (navigate === '/about') {
      this.router.navigate(['/about']);
    } else if (navigate === '/contact') {
      this.router.navigate(['/contact']);
    }
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse) {
      navbarCollapse.classList.remove('show');
    }
  }

}
