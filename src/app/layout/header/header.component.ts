import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  overlayVisible: boolean = false;

  toggle() {
    this.overlayVisible = !this.overlayVisible;
  }
  stateOptions = [
    { label: 'Map', value: 'Map' },
    { label: 'List', value: 'List' },
  ];
  ngOnInit(): void {
    // @ts-ignore
    document.getElementById('activeMenu').focus();
  }
}
