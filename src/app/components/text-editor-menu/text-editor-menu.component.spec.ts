import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextEditorMenuComponent } from './text-editor-menu.component';

describe('TextEditorMenuComponent', () => {
  let component: TextEditorMenuComponent;
  let fixture: ComponentFixture<TextEditorMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextEditorMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextEditorMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
