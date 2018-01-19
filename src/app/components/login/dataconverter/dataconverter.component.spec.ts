import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DataconverterComponent } from './dataconverter.component';
import {Data} from '../../models/data.model';
import {DataService} from '../../services/data.service';

describe('DataconverterComponent', () => {
  let component: DataconverterComponent;
  let fixture: ComponentFixture<DataconverterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataconverterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataconverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
