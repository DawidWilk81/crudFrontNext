import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from '../film.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent implements OnInit {
  filmy:any=[];
  constructor(private _route:ActivatedRoute,private _FService:FilmService, private _location:Location, private _router:Router) { }

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id');

    this._FService.FilmClicked(Number(id)).subscribe(
      (dane) => {
        this.filmy = dane;
        console.table(this.filmy);
      },(error) => {
        console.log(error);
      }
    )
    
  }
  back(){
    this._router.navigateByUrl('')
  }
  updateFilm = () => {
    this._FService.updateFilm(this.filmy).subscribe(
      data => {
        this.filmy = data;
        alert('updated');
        this._location.back();
      },
      error => {
        console.log(error);
      }
    )
}
}
