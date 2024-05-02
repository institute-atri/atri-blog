import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ContentHeaderComponent } from './components/content-header/content-header.component'; 
import { ContentComponent } from './components/content/content.component';
import { PagenavComponent } from './components/pagenav/pagenav.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatSidenavModule } from '@angular/material/sidenav'; // Importe apenas o MatSidenavModule
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatSidenavModule, // Use apenas o MatSidenavModule aqui
        NoopAnimationsModule
      ],
      declarations: [
        AppComponent,
        SidenavComponent,
        ContentHeaderComponent,
        ContentComponent,
        PagenavComponent,
        FooterComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});