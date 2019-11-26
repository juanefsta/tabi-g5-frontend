import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComisariaService } from 'src/app/services/comisaria.service';
import { Comisaria } from 'src/app/shared/models/comisaria.model';
import { map } from 'rxjs/operators';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private _comisarias: Comisaria[] = [];

  constructor(
    private route: ActivatedRoute,
    private _comisariaService: ComisariaService
  ) { }

  ngOnInit() {
    this._comisariaService.GetAllComisarias()
    .subscribe( (res:any) => {
      Object.assign(this._comisarias, res.body.data);
      console.log('res');
      console.log(this._comisarias);      
    });;
    
  }

}
