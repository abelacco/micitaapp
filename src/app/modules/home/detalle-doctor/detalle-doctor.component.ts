import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-detalle-doctor',
  templateUrl: './detalle-doctor.component.html',
  styleUrls: ['./detalle-doctor.component.scss']
})
export class DetalleDoctorComponent implements OnInit {

  selectedDate!: Date;
  selectedTime!: Date;
  description!: string;
  availableTimes: SelectItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  // Método para reservar la cita
  reserveAppointment() {
    // Aquí se podría agregar la lógica para reservar la cita
  }

  onDateSelect() {
    // Clear previous available times
    this.availableTimes = [];

    // Define start and end times
    const startHour = 9;
    const endHour = 18;

    // Get selected date and extract its hour and minute
    const date = new Date(this.selectedDate);
    const hour = date.getHours();
    const minute = date.getMinutes();

    // Create options for each hour between start and end
    for (let i = startHour; i <= endHour; i++) {
      const time = new Date(date.getFullYear(), date.getMonth(), date.getDate(), i, minute);
      const timeString = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      this.availableTimes.push({ label: timeString, value: timeString });
    }
  }

}
