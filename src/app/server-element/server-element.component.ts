import {AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit , AfterViewInit, AfterContentInit {
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() {
  }

  ngOnInit() {
    console.log('content when ngOnInit :' + this.header.nativeElement.textContent);
  }

  ngAfterViewInit(): void {
    console.log('content when ngAfterViewInit :' + this.header.nativeElement.textContent);
  }

  ngAfterContentInit(): void {
    console.log('content when ngAfterContentInit :' + this.paragraph.nativeElement.textContent);
  }

}
