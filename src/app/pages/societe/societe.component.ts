import { Component, OnInit } from '@angular/core';
import { Societe } from 'src/app/classes/societe';
import { SocieteService } from 'src/app/services/societe.service';

@Component({
  selector: 'app-societe',
  templateUrl: './societe.component.html',
  styleUrls: ['./societe.component.css']
})
export class SocieteComponent implements OnInit {

  lessocietes:Societe[]=[];
  constructor(private societeService:SocieteService) { }

  ngOnInit(): void {
    
  this.societeService.getSociete()
  .subscribe(
    
        (data: any) => {
          this.lessocietes= data.societes;
          console.log(this.lessocietes);
        },
        error => {
          console.log('Une erreur s\'est produite lors de la récupération des societes : ', error);
        }
      );
  }



}
