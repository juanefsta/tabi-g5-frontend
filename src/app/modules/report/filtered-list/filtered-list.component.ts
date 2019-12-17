import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Municipio } from 'src/app/shared/models/municipio.model';
import { MunicipiosService } from 'src/app/services/municipios.service';

@Component({
    selector: 'filtered-list',
    styleUrls: ['filtered-list.component.css'],
    templateUrl: 'filtered-list.component.html',
})
export class FilteredListComponent implements OnInit {

    displayedColumns: string[] = ['nombre', 'cantCentros'];
    dataSource: MatTableDataSource<any>;

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;

    constructor(
        private _municipioService: MunicipiosService
    ) { }

    ngOnInit() {
        this._municipioService.GetAllMunicipios()
            .subscribe((res: any) => {
                this.dataSource = new MatTableDataSource(res.body.data);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
            });
    }
    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}