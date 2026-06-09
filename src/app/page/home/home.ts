import { Component } from '@angular/core';
import { MatAnchor } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [MatAnchor, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
