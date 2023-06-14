import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Stagiaire } from 'src/app/classes/stagiaire';
import { StagiaireService } from 'src/app/services/stagiaire.service';

@Component({
  selector: 'app-detailsstagieres',
  templateUrl: './detailsstagieres.component.html',
  styleUrls: ['./detailsstagieres.component.css']
})
export class DetailsstagieresComponent implements OnInit {
  selectedstagiere!:Stagiaire;  
  constructor(private activatedRoute:ActivatedRoute,private stagiaireService:StagiaireService) { }

  ngOnInit(): void {
    let idSt:number = this.activatedRoute.snapshot.params["id"];
    this.stagiaireService.getstagById(idSt).subscribe(
      (data:any) => {
        this.selectedstagiere = data.etudiant_stagiaire;
        console.log(this.selectedstagiere);
       
      }

    )
  }

}
