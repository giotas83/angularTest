import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildAppuntiComponent } from './build-appunti.component';

describe('BuildAppuntiComponent', () => {
  let component: BuildAppuntiComponent;
  let fixture: ComponentFixture<BuildAppuntiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildAppuntiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildAppuntiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
