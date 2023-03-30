import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  specialities = [
    { label: 'Especialidad 1', value: 'especialidad1' },
    { label: 'Especialidad 2', value: 'especialidad2' },
    // Añade más opciones según las especialidades disponibles
  ];

  modalities = [
    { label: 'Online', value: 'online' },
    { label: 'Presencial', value: 'presencial' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
