import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { SkillDetails } from './skill-details/skill-details';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillDetails],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Skills implements AfterViewInit {
  @ViewChild('swiper')
  swiperRef!: ElementRef;

  ngAfterViewInit() {
    const swiperEl = this.swiperRef.nativeElement;

    Object.assign(swiperEl, {
      slidesPerView: 1,
      loop: true,
      navigation: true,
      pagination: {
        clickable: true,
      },
      breakpoints: {
        320: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
    });
    swiperEl.initialize();
  }
}
