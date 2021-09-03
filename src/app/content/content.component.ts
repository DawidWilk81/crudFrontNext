import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FilmService} from '../film.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  providers: [FilmService]
})
export class ContentComponent implements OnInit {
  filmy = [{Tytul:'jjj'}];
  wybranyFilm;
  constructor(private http:HttpClient,
     private FS:FilmService,
     private _Aroute:ActivatedRoute,
     private _route:Router) { }

  ngOnInit(): void {
    this.getFilmy()
  }
  getFilmy=() =>{
    this.FS.getFilm().subscribe(
      data => {
        this.filmy = data;
        console.table(data);
      },error => {
        console.log(error)
      });
  }
  deleteRow =() =>{
    this.FS.DeleteFilm(this.wybranyFilm.id).subscribe(
      request =>{
        alert('Usunięto');
        window.location.reload();
      },error =>{
        // this._route.navigateByUrl('');
        console.log(error);
      }
    )
  } 
  offerClicked = (film:any) =>{
    console.log(film.id);
    this.FS.FilmClicked(film.id).subscribe(
      data =>{
        this.wybranyFilm = data;
        
        console.log(this.wybranyFilm);
      },error=>{console.log('error',error)}
    )

  };

}
