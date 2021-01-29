import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() name!:string;

  @Input() lil_desc!:string;

  @Input() desc!:string;

  @Input() bkg!:string;

  @Input() languages!:string[];

  constructor() { }

  ngOnInit(): void {
  }

}
