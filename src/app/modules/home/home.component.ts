import { Component, OnInit } from '@angular/core';
import { ComisariaService } from 'src/app/services/comisaria.service';
import { Comisaria } from 'src/app/shared/models/comisaria.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public comisarias: Comisaria[] = [];
  constructor(
    private _comisariaService: ComisariaService
  ) { }

  ngOnInit() {
    // this._comisariaService.GetAllComisarias()
    // .subscribe( (res:any) => {
    //   Object.assign(this.comisarias, res.body.data);
    // });;
    
  }

}
