import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SocieteService } from 'src/app/services/societe.service';

@Component({
  selector: 'app-inscrip-sc',
  templateUrl: './inscrip-sc.component.html',
  styleUrls: ['./inscrip-sc.component.css']
})
export class InscripSCComponent implements OnInit {
  inscriSocieteForm !: FormGroup;
  selectedFileName: string = '';
  constructor(private fb : FormBuilder,private scserv:SocieteService,private router:Router) { }

  ngOnInit(): void {
    this.inscriSocieteForm = this.fb.nonNullable.group({
      Nom:['',[Validators.required, Validators.minLength(3),Validators.pattern('^[A-Z][a-zA-Z]+$')]],
      Activite:['',[Validators.required, Validators.minLength(3)]],
      Email :['',[Validators.required, Validators.email] ],
      Adresse : ['', [Validators.required]],
      Lettre : ['', [Validators.required]],
      Logo: ['', [Validators.required]],
      password:['',Validators.required],
      role: ['sc'],
      Type:['']


    })
  }
  /*fileTypeValidator(allowedTypes: string[]) {
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
  }*/
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
    this.scserv.addSociete(this.inscriSocieteForm.value)
    .subscribe(
      data => this.router.navigate(['/entreprise'])
    )
    console.log(this.inscriSocieteForm.value);
    
  }
  public get nom(){
    return this.inscriSocieteForm.get('Nom');
  }
  public get activite(){
    return this.inscriSocieteForm.get('Activite');
  }
  public get adresse(){
    return this.inscriSocieteForm.get('Adresse');
  }
  public get lettre(){
    return this.inscriSocieteForm.get('Lettre');
  }
  public get email(){
    return this.inscriSocieteForm.get('Email');
  }
public get password(){
    return this.inscriSocieteForm.get('password');
  }
  public get Logo(){
    return this.inscriSocieteForm.get('Logo');
  }
}
