import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { Accidente } from '../model/accidente';

import { Servicios } from '../services/services';

@Component({
	selector: 'app-estadisticas-component',
	templateUrl: './estadisticas.component.html',
	styleUrls: ['./estadisticas.component.css']
})

export class EstadisticasComponent implements OnInit{
	
	private accidentes = [];

	private selectedValue: string = 'Anual';
	private graficos = [{ value: 'Anual', viewValue: 'Anual' },
										{ value: 'Mensual', viewValue: 'Mensual' }];


	

	public barChartOptionsAnual: any = {
		scaleShowVerticalLines: true,
		responsive: true,
		
	};
	 public barChartLabelsAnual: string[] = ['2017', '2018', '2019', '2020', '2021', '2022', '2023'];;
	 public barChartTypeAnual:		string = 'bar';
	 public barChartLegendAnual: 	boolean = true;
	
	 public barChartDataAnual:any[] = [
		 { 
			 data: [65, 59, 80, 81, 56, 55, 40], 
			 label: 'Numero de accidentes de tránsito', 
			 
		},
	];
	

	private ene = true;
	private feb = true;
	private mar = true;
	private abr = true;
	private may = true;
	private jun = true;
	private jul = true;
	private ago = true;
	private sep = true;
	private oct = true;
	private nov = true;
	private dic = true;

	private meses = [];

	public barChartOptionsMensual: any = {
		scaleShowVerticalLines: false,
		responsive: true
	};
	public barChartLabelsMensual: string[] ;
	public barChartTypeMensual: string = 'bar';
	public barChartLegendMensual: boolean = true;
	
	public barChartDataMensual: any[] = [
			{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Numero de accidentes de tránsito' },
		];
	 
	constructor(
	  private router: Router,
	  private aR: ActivatedRoute,
	  private titleService: Title,
	  private servicio: Servicios
	) { }
	 

		
	ngOnInit() {
		this.titleService.setTitle('Estadísticas - OTRIT');
		this.servicio.getAccidentesEstadisticasMes().subscribe(accidentes => {
			this.accidentes = accidentes;
			console.log(this.accidentes);		
			this.editarGrafico();	
		});

		this.editarLabel();
		
	}

	private editarLabel(){
		console.log(this.ene);

		let meses = [];
		if (this.ene){
			meses.push('Enero');	
			}
		if (this.feb) {
			meses.push('Febrero');
		}
		if (this.mar) {
			meses.push('Marzo');
		}
		if (this.abr) {
			meses.push('Abril');
		}
		if (this.may) {
			meses.push('Mayo');
		}
		if (this.jun) {
			meses.push('Junio');
		}
		if (this.jul) {
			meses.push('Julio');
		}
		if (this.ago){
			meses.push('Agosto');
		}
		if (this.sep) {
			meses.push('Septiembre');
		}
		if (this.oct) {
			meses.push('Octubre');
		}
		if (this.nov) {
			meses.push('Noviembre');
		}
		if (this.dic) {
			meses.push('Diciembre');
		}
	
		this.barChartLabelsMensual = meses;
	}

	editarGrafico(){
		console.log(this.accidentes);
	}
}
