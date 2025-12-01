import { CommonModule } from '@angular/common';
import { Input, Component, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrl: './product-alerts.component.css'
})
export class ProductAlertsComponent {

  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();

  ngOnInit() {
    console.log(`ProductAlertsComponent is initialized..`);
  }

  ngOnDestroy() {
    console.log(`ProductAlertsComponent is destroyed..`);
  }
}
