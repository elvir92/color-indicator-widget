import { ElementRef } from '@angular/core';

export const getElementWithSameLeftOffset = (
  leftOffset: number,
  elemnts?: ElementRef<HTMLElement>[]
): ElementRef<HTMLElement> | undefined =>
  elemnts
    ?.filter(
      (ref: ElementRef, i: number) =>
        leftOffset >= ref?.nativeElement?.offsetLeft &&
        leftOffset <=
          ref.nativeElement?.offsetLeft + ref.nativeElement?.offsetWidth
    )
    .slice(-1)[0];