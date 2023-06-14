import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { Societe } from 'src/app/classes/societe';
import { Stagiaire } from 'src/app/classes/stagiaire';
import { AuthService } from 'src/app/services/auth.service';
import { StagiaireService } from 'src/app/services/stagiaire.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm !: FormGroup;
  emaillog!: boolean;
  passwordlog!: boolean;
  etsUsers!: Stagiaire[] ;
  stg!:any;
  typeInscription: string = '';
  
  lesUsers: Societe[] = [
    {id:3,Nom:"Focus",Adresse:"elghazela",Activite:"Nos clients viennent avec des idées,des projets,que nous transformons en solutions It qui leur apportent plus d'agilité,de performance",
    role:"sc",Logo:" ", Email: 'contact@focus-corporation.com',
     password: 'password1',Type:""}
  ];
  constructor(private fb : FormBuilder,private router:Router,private auth:AuthService,
    private stgserv:StagiaireService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.nonNullable.group({
      Email:['',[Validators.required, Validators.email]],
      password : ['',[Validators.required,Validators.minLength(6)]]
    });
    this.auth.role=this.typeInscription;
    
  }
  select(){
    console.log(this.typeInscription);
    if(this.typeInscription=="ets"){
        this.router.navigate(['/inscripets']);
      }
    if (this.typeInscription=="etd"){
          this.router.navigate(['/inscripedip']);
      }
      if(this.typeInscription=="sc"){ 
          this.router.navigate(['/inscripsc']);
    } 
 }
  /*recup(){
    const email = this.loginForm.get('Email')?.value;
    this.auth.findStagiaireByEmail(email).subscribe(
      (data: any) => {
        this.stg=data.etudiant_stagiaires;
        console.log(this.stg);
        
      });
  }*/
  public get emaillogin(){
    return this.loginForm.get('Email');
  }
  public get passwordlogin(){
    return this.loginForm.get('password');
  }

  




















  

  onSubmitstagiere() {
    // Récupérer les valeurs du formulaire
    const email = this.loginForm.get('Email')?.value;
    const password = this.loginForm.get('password')?.value;
    console.log(password);
  
    // Vérifier le rôle sélectionné
    this.auth.findStagiaireByEmail(email).subscribe(
      (data: any) => {
        this.stg = data.etudiant_stagiaires;
        console.log(this.stg);
  
        if (this.stg && this.stg.length > 0 && this.stg[0].password === password) {
          // Authentification réussie, vérifier le rôle
          if (this.stg[0].role === "ets") {
            // Rediriger vers l'accueil
            this.router.navigate(['/trouverstage']);
          } else {
            // Rôle non valide
            console.log('Rôle non valide');
          }
        } else {
          // Authentification incorrecte
          console.log('Authentification incorrecte');
        }
      },
      (error) => {
        console.log('Une erreur s\'est produite lors de la recherche du etudiant diplomé', error);
      }
    );
  }
  onSubmitETD() {
    // Récupérer les valeurs du formulaire
    const email = this.loginForm.get('Email')?.value;
    const password = this.loginForm.get('password')?.value;
    console.log(password);
  
    // Vérifier le rôle sélectionné
    this.auth.findDiplomeByEmail(email).subscribe(
      (data: any) => {
        this.stg = data.etudiant_diplomes;
        console.log(this.stg);
  
        if (this.stg && this.stg.length > 0 && this.stg[0].password === password) {
          // Authentification réussie, vérifier le rôle
          if (this.stg[0].role === "etd") {
            // Rediriger vers l'accueil
            this.router.navigate(['/trouverstage']);
          } else {
            // Rôle non valide
            console.log('Rôle non valide');
          }
        } else {
          // Authentification incorrecte
          console.log('Authentification incorrecte');
        }
      },
      (error) => {
        console.log('Une erreur s\'est produite lors de la recherche du employe', error);
      }
    );
  }
  
  onSubmitSC() {
    // Récupérer les valeurs du formulaire
    const email = this.loginForm.get('Email')?.value;
    const password = this.loginForm.get('password')?.value;
    console.log(password);
  
    // Vérifier le rôle sélectionné
    this.auth.findScocieteByEmail(email).subscribe(
      (data: any) => {
        this.stg = data.societes;
        console.log(this.stg);
  
        if (this.stg && this.stg.length > 0 && this.stg[0].password === password) {
          // Authentification réussie, vérifier le rôle
          if (this.stg[0].role === "sc") {
            // Rediriger vers l'accueil
            this.router.navigate(['/dashsociete']);
          } else {
            // Rôle non valide
            console.log('Rôle non valide');
          }
        } else {
          // Authentification incorrecte
          console.log('Authentification incorrecte');
        }
      },
      (error) => {
        console.log('Une erreur s\'est produite lors de la recherche du societe', error);
      }
    );
  }
  
}



/* onSubmit() {
    const email = this.loginForm.get('Email')?.value;
    const password = this.loginForm.get('password')?.value;

    this.auth.findUserByEmail(email).subscribe(
      (user: any) => {
        console.log(user);
        
        if (user) {
          if (user.password === password) {
            switch (user.role) {
              case 'ets':
                this.router.navigate(['/accueil']);
                break;
              case 'etd':
                this.router.navigate(['/accueil']);
                break;
              case 'sc':
                this.router.navigate(['/accueil']);
                break;
              default:
                console.log('Rôle non valide');
                break;
            }
          } else {
            console.log('Authentification incorrecte');
          }
        } else {
          console.log('Aucun utilisateur trouvé avec cet email');
        }
      },
      (error) => {
        console.log('Une erreur s\'est produite lors de la recherche de l\'utilisateur', error);
      }
    );
  }
}
  
  
*/