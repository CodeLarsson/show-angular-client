import { Component } from '@angular/core';
import { CatServiceService } from '../../../service/cat-service.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, mergeMap } from 'rxjs';
import { Cat } from '../../../model/cat';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cat-details',
  standalone: true,
  imports: [CommonModule],
  providers: [CatServiceService],
  templateUrl: './cat-details.component.html',
  styleUrl: './cat-details.component.scss',
})
export class CatDetailsComponent {
  constructor(
    readonly catServiceService: CatServiceService,
    private activatedRoute: ActivatedRoute,
  ) {}

  cat$: Observable<Cat> = this.activatedRoute.params.pipe(
    mergeMap((params) => {
      return this.catServiceService.getCatById(params['id']);
    }),
  );
}
