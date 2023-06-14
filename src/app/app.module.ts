import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './pages/acceuil/acceuil.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { TrouverstageComponent } from './pages/trouverstage/trouverstage.component';
import { TrouverstagieresComponent } from './pages/trouverstagieres/trouverstagieres.component';
import{ HttpClientModule} from '@angular/common/http';
import { DetailsoffreComponent } from './components/detailsoffre/detailsoffre.component';
import { EtudiantDiplomeComponent } from './pages/etudiant-diplome/etudiant-diplome.component';
import { SocieteComponent } from './pages/societe/societe.component';
import { AjouteroffreComponent } from './components/ajouteroffre/ajouteroffre.component';
import { NavComponent } from './components/nav/nav.component';
import { InscripEtudiantSTComponent } from './components/inscrip-etudiant-st/inscrip-etudiant-st.component';
import { InscripEtudiantDipComponent } from './components/inscrip-etudiant-dip/inscrip-etudiant-dip.component';
import { InscripSCComponent } from './components/inscrip-sc/inscrip-sc.component';
import { FooterComponent } from './components/footer/footer.component';
import { ConseilsComponent } from './pages/conseils/conseils.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { Error404Component } from './pages/error404/error404.component';
import { CarousselbootComponent } from './components/carousselboot/carousselboot.component';
import { DetailsstagieresComponent } from './components/detailsstagieres/detailsstagieres.component';
import { TrouveremployeComponent } from './pages/trouveremploye/trouveremploye.component';
import { DashboardscComponent } from './pages/dashboardsc/dashboardsc.component';


@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    AboutusComponent,
    TrouverstageComponent,
    TrouverstagieresComponent,
    DetailsoffreComponent,
    EtudiantDiplomeComponent,
    SocieteComponent,
    AjouteroffreComponent,
    NavComponent,
    InscripEtudiantSTComponent,
    InscripEtudiantDipComponent,
  
    InscripSCComponent,
        FooterComponent,
        ConseilsComponent,
        LoginComponent,
        Error404Component,
        CarousselbootComponent,
        DetailsstagieresComponent,
        TrouveremployeComponent,
        DashboardscComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
