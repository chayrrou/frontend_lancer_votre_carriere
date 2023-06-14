import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './pages/acceuil/acceuil.component';
import { TrouverstageComponent } from './pages/trouverstage/trouverstage.component';
import { TrouverstagieresComponent } from './pages/trouverstagieres/trouverstagieres.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { DetailsoffreComponent } from './components/detailsoffre/detailsoffre.component';
import { EtudiantDiplomeComponent } from './pages/etudiant-diplome/etudiant-diplome.component';
import { SocieteComponent } from './pages/societe/societe.component';
import { AjouteroffreComponent } from './components/ajouteroffre/ajouteroffre.component';
import { ConseilsComponent } from './pages/conseils/conseils.component';
import { LoginComponent } from './pages/login/login.component';
import { InscripSCComponent } from './components/inscrip-sc/inscrip-sc.component';
import { InscripEtudiantSTComponent } from './components/inscrip-etudiant-st/inscrip-etudiant-st.component';
import { InscripEtudiantDipComponent } from './components/inscrip-etudiant-dip/inscrip-etudiant-dip.component';
import { Error404Component } from './pages/error404/error404.component';
import { CarousselbootComponent } from './components/carousselboot/carousselboot.component';
import { DetailsstagieresComponent } from './components/detailsstagieres/detailsstagieres.component';
import { TrouveremployeComponent } from './pages/trouveremploye/trouveremploye.component';
import { DashboardscComponent } from './pages/dashboardsc/dashboardsc.component';

const routes: Routes = [

  {path:'', redirectTo:'acceuil', pathMatch:'full'},
  {path:'acceuil',component:AcceuilComponent},
  {path:'trouverstage',component:TrouverstageComponent},
  {path:'trouverstagieres',component:TrouverstagieresComponent},
  {path:'trouveremploye',component:TrouveremployeComponent},
  {path:'aboutus',component:AboutusComponent},
  { path: 'details-offre/:id', component:DetailsoffreComponent },
  { path: 'detailsstagieres/:id', component:DetailsstagieresComponent },
  {path:'trouveremploye',component:EtudiantDiplomeComponent},
  {path:'entreprise',component:SocieteComponent},
  {path:'ajouteroffre',component:AjouteroffreComponent},
  {path:'conseils',component:ConseilsComponent},
  {path:'login',component:LoginComponent},
  {path:'inscripsc',component:InscripSCComponent},
  {path:'inscripets',component:InscripEtudiantSTComponent},
  {path:'inscripedip',component:InscripEtudiantDipComponent},
  {path:'dashsociete',component:DashboardscComponent},
  
  { path:'**', component:Error404Component}
  




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
