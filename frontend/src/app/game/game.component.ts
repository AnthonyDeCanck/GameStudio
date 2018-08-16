import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
 
  private code: string;
  private url: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer, private route:ActivatedRoute) { }

ngOnInit() {
  this.code = ""+ this.route.snapshot.paramMap.get('string');
  let url = `../../assets/games/${this.code}`;
  this.url = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
