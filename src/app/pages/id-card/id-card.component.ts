import { Component } from '@angular/core';
import { Card } from 'src/app/interfaces/id-card-interfaces';

@Component({
  selector: 'app-id-card',
  templateUrl: './id-card.component.html',
  styleUrls: ['./id-card.component.scss']
})
export class IdCardComponent {
  Card: Card = {
    name: "Akhila Pocham",
    email: "akhilapocham@gmail.com",
    phone: 7788900514,
    profession: "UI/UX Developer",
    address: "Plot A, 6th Floor,Dallas Center, 83/1, Hitech City",
    pincode:"Madhapur,Hyderabad-500081",
    companyEmail :"WWW.motivitylabs.com",
    id:"MLI1234"
  }

  onPrint() {
    if (!this.Card.name || !this.Card.email || !this.Card.phone || !this.Card.profession || !this.Card.address || !this.Card.companyEmail || !this.Card.pincode || !this.Card.id) {
      return
    }
    window.print()
  }
}
