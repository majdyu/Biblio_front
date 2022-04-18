import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Emprunt } from '../models/emprunt.model';

@Injectable({
  providedIn: 'root'
})
export class EmpruntService {

  constructor(private http: HttpClient) { }

  getAllEmprunt(){
    return this.http.get(environment.api+"/api/emprunts");
  }
  createEmprunt(emprunt: Emprunt){
    return this.http.post(environment.api+"/api/emprunts",emprunt);
  }
}
