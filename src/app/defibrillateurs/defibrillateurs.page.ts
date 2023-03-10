import { Component, OnInit } from '@angular/core';
import { ITEM } from './defibrillateurs';
import ItemJson from '../../assets/data.json';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-defibrillateurs',
  templateUrl: './defibrillateurs.page.html',
  styleUrls: ['./defibrillateurs.page.scss'],
})
export class DefibrillateursPage implements OnInit {

  items: ITEM[] = ItemJson;
  showMenu= false;

  constructor(private router: Router, private http: HttpClient) {
  }

  ngOnInit() {
    //console.log(this.items)

    //API Endpoint
    this.http
      .get("http://localhost:3000/api/defibrillateurs")
      .subscribe((res) => console.log(res)
    )}

    //routing page
  navigate() {
    this.router.navigate(['/commandes'])
  }
}
