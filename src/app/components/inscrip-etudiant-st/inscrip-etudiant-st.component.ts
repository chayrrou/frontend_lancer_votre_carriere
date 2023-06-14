import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StagiaireService } from 'src/app/services/stagiaire.service';


@Component({
  selector: 'app-inscrip-etudiant-st',
  templateUrl: './inscrip-etudiant-st.component.html',
  styleUrls: ['./inscrip-etudiant-st.component.css']
})
export class InscripEtudiantSTComponent implements OnInit {
  etudiantStagiereForm !: FormGroup;
  selectedFileName: string = '';
  Type:String[]=["Sélectionnez un type de stage","Initiation","Perfectionnement","PFE","Facultatif"];
  constructor(private fb : FormBuilder,private servstag:StagiaireService,private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.etudiantStagiereForm= this.fb.nonNullable.group({
      Nom:['',[Validators.required, Validators.minLength(3),Validators.pattern('^[A-Z][a-zA-Z]+$')]],
      Prenom:['',[Validators.required, Validators.minLength(3),Validators.pattern('^[A-Z][a-zA-Z]+$')]],
      Type:['Sélectionnez un type de stage'],
      Email :['',[Validators.email] ],
      Adresse : ['', [Validators.required]],
      Lettre : ['', [Validators.required, Validators.pattern('^[A-Z][a-zA-Z]+$')]],
      CV: [''],
      password:['',Validators.required],
      role: [this.auth.role]
    })
  }
  
  /*fileTypeValidator(allowedTypes: string[]) {
    return (control: AbstractControl): ValidationErrors | null => {
      const file = control.value;
      if (file) {
        const fileType = file.name.split('.').pop()?.toLowerCase();
        if (!fileType || !allowedTypes.includes(fileType)) {
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
    this.servstag.addStagiaire(this.etudiantStagiereForm.value)
    .subscribe(
      data => this.router.navigate(['/trouverstagieres'])
    )
    console.log(this.etudiantStagiereForm.value);
    
  }
  public get nom(){
    return this.etudiantStagiereForm.get('Nom');
  }
  public get prenom(){
    return this.etudiantStagiereForm.get('Prenom');
  }
  public get adresse(){
    return this.etudiantStagiereForm.get('Adresse');
  }
  public get lettre(){
    return this.etudiantStagiereForm.get('Lettre');
  }
  public get cv(){
    return this.etudiantStagiereForm.get('CV');
  }
  public get email(){
    return this.etudiantStagiereForm.get('Email');
  }
  public get password(){
    return this.etudiantStagiereForm.get('password');
  }



}
