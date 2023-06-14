import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EtudiantDiplome } from '../classes/etudiant-diplome';

const URL="http://localhost:3000/etuddip";
@Injectable({
  providedIn: 'root'
})
export class EtudiantDiplomeService {

  constructor( private http:HttpClient) { }
  getDiplome():Observable<any>{
    return this.http.get<any>(URL);
  }
  addDiplome(d:EtudiantDiplome):Observable<EtudiantDiplome>{
    return this.http.post<EtudiantDiplome>(URL, d)
  }

  updateDiplome(id:number,d:EtudiantDiplome){
    return this.http.put<EtudiantDiplome>(URL+"/"+id ,d)
  }
  deleteDiplome(id : number){
    return this.http.delete(`${URL}/${id}`);
  }
}
