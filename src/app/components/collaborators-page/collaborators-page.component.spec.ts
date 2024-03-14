import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaboratorsPageComponent } from './collaborators-page.component';

describe('CollaboratorsPageComponent', () => {
  let component: CollaboratorsPageComponent;
  let fixture: ComponentFixture<CollaboratorsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollaboratorsPageComponent]
    });
    fixture = TestBed.createComponent(CollaboratorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
