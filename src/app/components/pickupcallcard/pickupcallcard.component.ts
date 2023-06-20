import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pickupcallcard',
  templateUrl: './pickupcallcard.component.html',
  styleUrls: ['./pickupcallcard.component.scss'],
})
export class PickupcallcardComponent  implements OnInit {

  @Input()
  hasHeader!: boolean;
  @Input()
  hasFooter!: boolean;
  @Input()
  status!: string;
  @Input()
  updatedAt!: string;
  @Input()
  createdAt!: string;
  @Input()
  notes!: string;
  @Input()
  value!: string;
  constructor() { }

  ngOnInit() {}

}
