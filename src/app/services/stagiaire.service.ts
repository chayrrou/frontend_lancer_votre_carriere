import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stagiaire } from '../classes/stagiaire';

const URL="http://localhost:3000/etudstag";
@Injectable({
  providedIn: 'root'
})
export class StagiaireService {

  constructor( private http:HttpClient) { }
  getStagiaire():Observable<any>{
    return this.http.get<any>(URL);
  }
  getstagById(id:number):Observable<Stagiaire>{
    return this.http.get<Stagiaire>(URL+"/"+ id);
  }
  addStagiaire(d:Stagiaire):Observable<Stagiaire>{
    return this.http.post<Stagiaire>(URL, d)
  }

  updateStagiaire(id:number,d:Stagiaire){
    return this.http.put<Stagiaire>(URL+"/"+id ,d)
  }
  deleteStagiaire(id : number){
    return this.http.delete(`${URL}/${id}`);
  }
}
