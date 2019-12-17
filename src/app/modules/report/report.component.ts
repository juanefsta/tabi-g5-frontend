import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Municipio } from 'src/app/shared/models/municipio.model';
import { MunicipiosService } from 'src/app/services/municipios.service';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit, AfterContentInit {
  public municipios: Municipio[] = [];
  public municipiosConCentro: Municipio[] = [];
  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource();
  constructor(
    private _municipioService: MunicipiosService
  ) { }
  ngOnInit() {
    this._municipioService.GetAllMunicipios()
      .subscribe((res: any) => {
        this.municipios.push(...res.body.data);
      });;
  }

  ngAfterContentInit(): void {
    console.log("this.municipios");
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
