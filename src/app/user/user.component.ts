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
    console.log(event);
    this.doChangeColors.emit("Hello");

  }
  ngOnInit() {
  }

}
