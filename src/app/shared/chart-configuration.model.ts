export class NgxChartConfig {
    view: any[] = [];
    colorScheme = {
        domain: []
    };
}

export class AdvancedPieChartConfig extends NgxChartConfig {
    gradient: boolean = true;
    showLegend: boolean = true;
    showLabels: boolean = true;
    isDoughnut: boolean = false;
}