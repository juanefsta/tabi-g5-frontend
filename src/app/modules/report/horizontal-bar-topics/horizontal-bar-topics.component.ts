import { Component, OnInit } from '@angular/core';
import { t_violencia, vinculo, sexo_victima,totales } from 'src/app/modules/report/horizontal-bar-topics/data'
@Component({
    selector: 'horizontal-bar-topics',
    styleUrls: ['horizontal-bar-topics.component.css'],
    templateUrl: 'horizontal-bar-topics.component.html',
})
export class HorizontalBarTopicsComponent implements OnInit {

    view: any[] = [700, 400];
    municipios: any[] = [];
    listado: any[] = [];
    // options
    showXAxis: boolean = true;
    showYAxis: boolean = true;
    showLegend: boolean = true;
    showXAxisLabel: boolean = true;
    yAxisLabel: string = 'Tipo de violencia';
    showYAxisLabel: boolean = true;
    xAxisLabel: string = 'Total de casos';
    // colorScheme = {
    //     domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    // };
    // options

    // options

    gradient: boolean = true;
    gradient2: boolean = false;
    showLabels: boolean = true;
    isDoughnut: boolean = false;
    cardColor: string = '#232837';
    colorScheme = {
        domain: ['red', 'green', 'yellow', 'purple', 'blue', 'pink', 'brown']
    };
    constructor() {
        Object.assign(this, { t_violencia });
        Object.assign(this, { vinculo });
        Object.assign(this, { sexo_victima });
        Object.assign(this, { totales });
    }

    ngOnInit() {
    }
}