import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Livre } from '../models/livre.model';

@Injectable({
  providedIn: 'root'
})
export class LivreService {

  constructor(private http: HttpClient) { }

  getAllLivre(){
    return this.http.get(environment.api+"/api/livres");
  }
  createLivre(livre: Livre){
    return this.http.post(environment.api+"/api/livres", livre);
  }
  getLivreById(id: string){
    return this.http.get(environment.api+"/api/livres/"+id);
  }
  
  updateLivre(livre: Livre){
    return this.http.put(environment.api +"/api/livres/"+livre.id, livre);
  }
  deleteLivre(id: string){
    return this.http.delete(environment.api+"/api/livres/"+id);
  }
  findAllNotBorrowed(): Observable<Livre[]>{
    return this.http.get<Livre[]>(environment.api+"/api/livres-non-emprunter");
  }
}
