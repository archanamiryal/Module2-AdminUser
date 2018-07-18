import { Component, OnInit,Input,Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  title="User Information"
  filterByName:String
  @Input() users;
  @Output() doChangeColors =new EventEmitter();

  constructor() { }


  changeColors(event)
  {
    let element = document.querySelector('.panel-body').classList;
    element.toggle('backcolor');
    this.doChangeColors.emit("Hello....");

  }
  ngOnInit() {
  }

}
