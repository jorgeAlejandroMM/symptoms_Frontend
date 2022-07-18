import { Component, OnInit } from '@angular/core';
import { SymptomService } from '../services/Symptom/symptom.service';
import { Chart } from "chart.js";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  public symptoms: any[] = [];
  public selection: any []=[];
  public componentsEstadist:any []=[];
  public chart: Chart;

  constructor(private symptom:SymptomService) {
    this.symptom.getSymptom().subscribe((value : any) => {
      this.symptoms = value.body;
      // console.log(this.symptoms)
    })

    
   }

  ngOnInit(){
    this.runChart()
  }

  changeHandler(item:any, $event:any){
  
    const id = item.id;

    const index = this.selection.findIndex(u => u.id === id);
    if (index === -1) {
      // ADD TO SELECTION
      // this.selection.push(item);
      this.selection = [...this.selection, item];
    } else {
      // REMOVE FROM SELECTION
      this.selection = this.selection.filter(symptoms => symptoms.id !== item.id)
      // this.selection.splice(index, 1)
  }
    this.updateChart();
  }



  updateChart(){

    let components = [];
    this.selection.forEach((item :any)  =>{
      item.components.map((value :Array<any>) => {
        components.push(value);
        

      })

    })

console.log(components)
let cont: any[]= [];
// Este codigo me permite buscar el componentes repetidos y les asigna la propiedad "recidivism" el numero de veces que se encuentra repetido el componente
for(let i=0; i<components.length; i++){ 
    const aux = cont.findIndex((s : any)=> s.id === components[i].id);
    if( components[i].name.length > 0 && aux === -1){
      components[i].recidivism= 1
       cont.push( components[i])
    }else{
      cont.map((value:any)=>{
        if( components[i].id == value.id ){
          value.recidivism =  value.recidivism  + 1;
        }
      })
      // console.log(cont)
    }
   }
      console.log(cont)
    this.runChart(cont as Array<any>);
  }


  runChart(data?) {
    this.chart = new Chart("canvas", {
      type: "bar",
      data: {
        labels: data ? data.map(value => value.name) : [] ,
        datasets: [
          {
            label: "# of Votes",
            data:data ? data.map(value => value.recidivism) : [],
            backgroundColor: [
              'red',    // color for data at index 0
              'blue',   // color for data at index 1
              'green',  // color for data at index 2
              'black',
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        plugins: {
          legend: {
          display: false
          },
          tooltip: {
          mode: 'index',
          intersect: false
          }
},
hover: {
      mode: 'nearest',
      intersect: false
      }
,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }
}
