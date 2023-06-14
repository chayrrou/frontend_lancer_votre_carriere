import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Offre } from 'src/app/classes/offre';
import { OffreService } from 'src/app/services/offre.service';


@Component({
  selector: 'app-detailsoffre',
  templateUrl: './detailsoffre.component.html',
  styleUrls: ['./detailsoffre.component.css']
})
export class DetailsoffreComponent implements OnInit {
  selectedoffre!:Offre;  
  constructor(private activatedRoute:ActivatedRoute,private OffreService:OffreService) { }

  ngOnInit(): void {
    let idOffre:number = this.activatedRoute.snapshot.params["id"];
    this.OffreService.getOffreById(idOffre).subscribe(
      (data:any) => {
        this.selectedoffre = data.offre;
        console.log(this.selectedoffre);
       
      }

    )
  }

}
