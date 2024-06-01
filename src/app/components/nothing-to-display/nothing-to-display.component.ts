import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-nothing-to-display',
  standalone: true,
  imports: [MatIconModule, MatTooltip],
  templateUrl: './nothing-to-display.component.html',
  styleUrl: './nothing-to-display.component.less'
})
export class NothingToDisplayComponent {

}
