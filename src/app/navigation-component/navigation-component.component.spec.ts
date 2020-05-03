import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NavigationComponentComponent } from './navigation-component.component';
import { Router } from '@angular/router';
import { BoundAttribute } from '@angular/compiler/src/render3/r3_ast';
import { By } from '@angular/platform-browser';

describe('NavigationComponentComponent', () => {
  let component: NavigationComponentComponent;
  let fixture: ComponentFixture<NavigationComponentComponent>;
  let mockRouter;
  let logoutBtnEl: HTMLElement;
 

  beforeEach(async(() => {
    mockRouter = { navigate: jasmine.createSpy('navigate') };
    TestBed.configureTestingModule({
      declarations: [ NavigationComponentComponent ],
      imports: [HttpClientTestingModule],
      providers: [

        /**
         * Create a very basic stub object with one method:'navigate'
         *
         * Use Jasmine's createSpy to create a very basic function
         * which also allows us to "listen in" when it's called
         */
        {
            provide: Router,
            useClass: class { 
                navigate = jasmine.createSpy("navigate"); 
            }
        }]
      
    })
    .compileComponents();
    
    
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have Navigation Bar', () => {
    const btn = fixture.debugElement.nativeElement.querySelector('#spec-navigation');
    expect(btn).toBeTruthy();
  });

 it('should navigate to /home when clickLogout is fired', () => {
    let router = fixture.debugElement.injector.get(Router);
    logoutBtnEl = fixture.debugElement.nativeElement.querySelector('#logo');
    logoutBtnEl.click()
    expect(router.navigate).toHaveBeenCalledWith(["/home"]);
 }); 



  
  
  
});
