import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientService } from '@youtube-app/client/core/http-client';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly httpClient = inject(HttpClientService);

  constructor() {
    this.httpClient.get<{ message: string }>('').subscribe((data) => console.log(data.message));
  }

  fetchData() {
    this.httpClient.get<{ message: string }>('').subscribe((data) => console.log(data.message));
  }
}
