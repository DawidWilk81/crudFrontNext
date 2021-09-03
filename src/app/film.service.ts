import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FilmService {
  baseUrl = "http://127.0.0.1:8000/api/";
  constructor(private http:HttpClient) { }
  headers ={'Content-Type': 'application/json'}

  getFilm():Observable<any>{
    return this.http.get<any>("http://127.0.0.1:8000/api/Filmy/", {headers:this.headers});
  }
  FilmClicked(id:number):Observable<any>{
    return this.http.get<any>(`http://127.0.0.1:8000/api/Filmy/${id}/`, {headers:this.headers})
  }
  DeleteFilm(id:number):Observable<any>{
    return this.http.delete<any>(`http://127.0.0.1:8000/api/Filmy/${id}/`, {headers:this.headers})
  }
  updateFilm(film:any):Observable<any> {
    const body = {
      Tytul:film.Tytul,
      Rezyser:film.Rezyser,
      Czas_trwania:film.Czas_trwania, // typ pojazdu
      Data_wydania:film.Data_wydania,
      Ocena:film.Ocena,
      Oparty_na_ksiazce:film.Oparty_na_ksiazce,
    }
    return this.http.put("http://127.0.0.1:8000/api/Filmy/" + film.id + '/', body, 
    {headers: this.headers})
  }

}
