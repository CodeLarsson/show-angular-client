import { Component } from '@angular/core';
import { CatServiceService } from '../../../service/cat-service.service';
import { Cat } from '../../../model/cat';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cat-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cat-list.component.html',
  styleUrl: './cat-list.component.scss',
})
export class CatListComponent {
  constructor(readonly catService: CatServiceService) {}

  cats$: Observable<Cat[]> = this.catService.getCats();
}
