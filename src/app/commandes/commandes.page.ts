import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.page.html',
  styleUrls: ['./commandes.page.scss'],
})
export class CommandesPage implements OnInit {

  showMenu= false;

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  navigate() {
    this.router.navigate(['/defibrillateurs'])
  }

}
