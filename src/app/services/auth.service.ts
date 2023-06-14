import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stagiaire } from '../classes/stagiaire';
import { Observable, forkJoin, map } from 'rxjs';
import { EtudiantDiplome } from '../classes/etudiant-diplome';
import { Societe } from '../classes/societe';
const URL="http://localhost:3000/etudstag";
const URL2="http://localhost:3000/societe";
const URL3="http://localhost:3000/etuddip";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  role: string = '';
  
  constructor(private http:HttpClient) { 

    
  }
  findStagiaireByEmail(email: string): Observable<Stagiaire> {
    return this.http.get<Stagiaire>(`${URL}?email=${email}`);
  }
  findDiplomeByEmail(email: string): Observable<EtudiantDiplome> {
    return this.http.get<EtudiantDiplome>(`${URL3}?email=${email}`);
  }
  findScocieteByEmail(email: string): Observable<Societe> {
    return this.http.get<Societe>(`${URL2}?email=${email}`);
  }

  /*getAllEntities(): Observable<any> {
    const stagiaires$ = this.http.get<any>(URL).pipe(map(data => data["etudiant-stagiaires"]));
    console.log(stagiaires$);
    
    const etudiantsDiplome$ = this.http.get<any>(URL3).pipe(map(data => data["etudiant-diplome"]));
    const societes$ = this.http.get<any>(URL2).pipe(map(data => data["societes"]));
    console.log(societes$);
    

    return forkJoin([stagiaires$, etudiantsDiplome$, societes$]);
  }

  */
  /*findStagiaireByEmail(email: string): Observable<Stagiaire> {
    return this.http.get<Stagiaire>(`${URL}?email=${email}`);
  }*/
}
