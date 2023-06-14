import { Component, OnInit } from '@angular/core';
import { EtudiantDiplome } from 'src/app/classes/etudiant-diplome';
import { EtudiantDiplomeService } from 'src/app/services/etudiant-diplome.service';

@Component({
  selector: 'app-trouveremploye',
  templateUrl: './trouveremploye.component.html',
  styleUrls: ['./trouveremploye.component.css']
})
export class TrouveremployeComponent implements OnInit {
  lesdiplomes:EtudiantDiplome[]=[];
  constructor(private etdipserv:EtudiantDiplomeService) { }

  ngOnInit(): void {
    this.etdipserv.getDiplome()
    .subscribe(
      (data: any) => {
        this.lesdiplomes = data.etudiant_diplomes;
        console.log(this.lesdiplomes);
      },
      error => {
        console.log('Une erreur s\'est produite lors de la récupération des etudiants diplomées : ', error);
      }
    );
  }

}
