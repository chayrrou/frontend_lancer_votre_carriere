import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EtudiantDiplomeService } from 'src/app/services/etudiant-diplome.service';

@Component({
  selector: 'app-inscrip-etudiant-dip',
  templateUrl: './inscrip-etudiant-dip.component.html',
  styleUrls: ['./inscrip-etudiant-dip.component.css']
})
export class InscripEtudiantDipComponent implements OnInit {
  etudiantDiplomeForm !: FormGroup;
  selectedFileName: string = '';

  constructor(private fb : FormBuilder,private router:Router,private etdipserv:EtudiantDiplomeService) { }

  ngOnInit(): void {
    this.etudiantDiplomeForm= this.fb.group({
      Nom:['',[Validators.required, Validators.minLength(3),Validators.pattern('^[A-Z][a-zA-Z]+$')]],
      Prenom:['',[Validators.required, Validators.minLength(3),Validators.pattern('^[A-Z][a-zA-Z]+$')]],
      Email :['',[Validators.required,Validators.email] ],
      Adresse : ['', [Validators.required]],
      Lettre : ['', [Validators.required]],
      CV: ['', [Validators.required]],
      diplome : ['', [Validators.required]],
      role:['etd'],
      password:['',Validators.required,Validators.minLength(6)],
      Type:['']
    })
  }
 /* fileTypeValidator(allowedTypes: string[]) {
    return (control: AbstractControl): ValidationErrors | null => {
      const file = control.value;
      if (file) {
        const fileType = file.name.split('.').pop().toLowerCase();
        if (!allowedTypes.includes(fileType)) {
          return { invalidFileType: true };
        }
      }
      return null;
    };
  }
*/
handleFileInput(event: any) {
  const files: FileList = event.target.files;
  if (files && files.length > 0) {
    const file: File = files[0];
    this.selectedFileName = file.name;

    const reader = new FileReader();
    reader.onload = () => {
      // Faites ce que vous devez faire avec reader.result
    };
    reader.readAsDataURL(file);
  }
}

onAjouterOffre(){
  this.etdipserv.addDiplome(this.etudiantDiplomeForm.value)
  .subscribe(
    data => this.router.navigate(['/trouverstagieres'])
  )
  console.log(this.etudiantDiplomeForm.value);
  
}
  public get nom(){
    return this.etudiantDiplomeForm.get('Nom');
  }
  public get prenom(){
    return this.etudiantDiplomeForm.get('Prenom');
  }
  public get adresse(){
    return this.etudiantDiplomeForm.get('Adresse');
  }
  public get lettre(){
    return this.etudiantDiplomeForm.get('Lettre');
  }
  public get cv(){
    return this.etudiantDiplomeForm.get('CV');
  }
  public get email(){
    return this.etudiantDiplomeForm.get('Email');
  }
  public get diplome(){
    return this.etudiantDiplomeForm.get('diplome');
  }

  public get password(){
    return this.etudiantDiplomeForm.get('password');
  }
}
