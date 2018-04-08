import { Component, 
    OnInit, 
    Output, 
    EventEmitter, 
   // ViewChild, 
  //  ElementRef 
  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() menuItemSelected= new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {}

  onSelectMenuItem(item:string) {
    this.menuItemSelected.emit(item);
  }
}
