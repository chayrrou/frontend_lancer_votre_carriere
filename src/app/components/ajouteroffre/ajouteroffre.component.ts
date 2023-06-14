import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OffreService } from 'src/app/services/offre.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouteroffre',
  templateUrl: './ajouteroffre.component.html',
  styleUrls: ['./ajouteroffre.component.css']
})


export class AjouteroffreComponent implements OnInit {
  offreForm: FormGroup= new FormGroup({})
  constructor(private fb:FormBuilder,private router:Router,
    private offreservice:OffreService) { }

  ngOnInit(): void {
    this.offreForm = this.fb.nonNullable.group({
      Titre:['', [Validators.required, Validators.minLength(5)]],
      DatePublication : ['', [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]],
      Salaire :['', [Validators.required, Validators.pattern(/^\d+(.\d{1,2})?$/)]],
      RoleCondidat: ['',Validators.required],
      Admissibilite: ['',Validators.required],
      Prossesus: ['',Validators.required],
      Logistique: ['',Validators.required],
      Logo: [null, Validators.required]
      
  })
}
handleFileInput(event: any) {
  const file: File = event.target.files[0];
  if (file && this.offreForm.get('Logo') instanceof FormControl) {
    const reader = new FileReader();
    reader.onload = () => {
      this.offreForm.get('Logo')!.setValue(reader.result);
    };
    reader.readAsDataURL(file);
  }

  
}


public get titre(){
  return this.offreForm.get('Titre');
}

public get datePublication(){
  return this.offreForm.get('DatePublication');
}


public get salaire(){
  return this.offreForm.get('Salaire');
}


public get roleCondidat(){
  return this.offreForm.get('RoleCondidat');
}

public get admissibilite(){
  return this.offreForm.get('Admissibilite');
}

public get prossesus(){
  return this.offreForm.get('Prossesus');
}

public get logistique(){
  return this.offreForm.get('Logistique');
}





onAjouterOffre(){
  this.offreservice.addOffre( this.offreForm.value)
  .subscribe(
    data => this.router.navigate(['/trouverstage'])
  )
}
}
