import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'getImageUrl'
})
export class GetImageUrlPipe implements PipeTransform {

  transform(imageName: any, args?: any): any {
    return `http://rentals-api.webtraining.fun/images/vehicles/${imageName}`;
  }

}
