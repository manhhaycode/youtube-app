import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientCoreHttpClientComponent } from './client-core-http-client.component';

describe('ClientCoreHttpClientComponent', () => {
  let component: ClientCoreHttpClientComponent;
  let fixture: ComponentFixture<ClientCoreHttpClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientCoreHttpClientComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientCoreHttpClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
