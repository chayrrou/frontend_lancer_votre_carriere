import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Societe } from '../classes/societe';

const URL="http://localhost:3000/societe";

@Injectable({
  providedIn: 'root'
})
export class SocieteService {

  constructor( private http:HttpClient) { }
  getSociete():Observable<any>{
    return this.http.get<any>(URL);
  }
  addSociete(d:Societe):Observable<Societe>{
    return this.http.post<Societe>(URL, d)
  }

  updateSociete(id:number,d:Societe){
    return this.http.put<Societe>(URL+"/"+id ,d)
  }
  deleteSociete(id : number){
    return this.http.delete(`${URL}/${id}`);
  }
}
