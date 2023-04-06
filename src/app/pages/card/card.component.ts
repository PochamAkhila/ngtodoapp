import { Component } from '@angular/core';
import { Visit } from 'src/app/interfaces/Visiting-card-interface';
// import "bootstrap/dist/css/bootstrap.css";
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';
// import {  ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  Visiting: Visit = {
    name: "Akhila Pocham",
    email: "akhilapocham@gmail.com",
    phone: 7788900514,
    profession: "UI/UX Developer",
    address: "@Hyderabad,kukatpally"
  }

  // @ViewChild('htmlData') htmlData!: ElementRef;

  onPrint() {
    if (!this.Visiting.name || !this.Visiting.email || !this.Visiting.phone || !this.Visiting.profession || !this.Visiting.address) {
      return
    }
    window.print()
  }

  openPDF(){
      if (!this.Visiting.name || !this.Visiting.email || !this.Visiting.phone || !this.Visiting.profession || !this.Visiting.address) {
      return
    }
    window.print()
  }
  


  // public openPDF(): void {
  //   let DATA: any = document.getElementById('htmlData');
  //   html2canvas(DATA).then((canvas) => {
  //     let fileWidth = 208;
  //     let fileHeight = (canvas.height * fileWidth) / canvas.width;
  //     const FILEURI = canvas.toDataURL('image/png');
  //     let PDF = new jsPDF('p', 'mm', 'a4');
  //     let position = 0;
  //     PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
  //     PDF.save('angular-demo.pdf');
  //   });
  // }
}
