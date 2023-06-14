import { Component, OnInit } from '@angular/core';
import { EtudiantDiplome } from 'src/app/classes/etudiant-diplome';
import { EtudiantDiplomeService } from 'src/app/services/etudiant-diplome.service';

@Component({
  selector: 'app-etudiant-diplome',
  templateUrl: './etudiant-diplome.component.html',
  styleUrls: ['./etudiant-diplome.component.css']
})
export class EtudiantDiplomeComponent implements OnInit {

  lesdiplome:EtudiantDiplome[]=[];
  constructor(private diplomeeService:EtudiantDiplomeService) { }

  ngOnInit(): void {
    this.diplomeeService.getDiplome()
    .subscribe(
      data => this.lesdiplome = data
    )
  }
  }


