import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.scss']
})
export class AddContentComponent implements OnInit {
  film;
  constructor(private _FService:FilmService, private _location:Location, private _router:Router, private http:HttpClient) { }

  ngOnInit(): void {
    this.film = {
      Tytul:"",
      Rezyser:"",
      Czas_trwania:"", // typ pojazdu
      Data_wydania:"",
      Ocena:"",
      Oparty_na_ksiazce:false,
    }
  }
  back(){
    this._router.navigateByUrl('')
  }
  pojazdPost = () =>{
    const body = {
      Tytul:this.film.Tytul,
      Rezyser:this.film.Rezyser,
      Czas_trwania:this.film.Czas_trwania, // typ pojazdu
      Data_wydania:this.film.Data_wydania,
      Ocena:this.film.Ocena,
      Oparty_na_ksiazce:this.film.Oparty_na_ksiazce,
    }
    return this.http.post("http://127.0.0.1:8000/api/Filmy/", body).subscribe(
      data => {
        alert("dodano do bazy danych");
        this._router.navigateByUrl('')
      },error => {console.log(error)}
    )}

}
