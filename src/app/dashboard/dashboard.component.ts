import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { NgChartsModule, BaseChartDirective  } from 'ng2-charts';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatCardModule, MatGridListModule, NgChartsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
    datasets: [
      {
        data: [1000, 1200, 1500, 1300, 1700, 1600, 1800, 1900, 2000, 2100, 2200, 2300],
        label: 'Erträge 2024',
        fill: 'origin',
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.3)',
        tension: 0.5,
      }
    ]
  };

  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      }
    }
  };
}
