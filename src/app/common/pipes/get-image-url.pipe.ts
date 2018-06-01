import {Pipe, PipeTransform} from '@angular/core';
import {API} from '../../config/api';

@Pipe({
  name: 'getImageUrl'
})
export class GetImageUrlPipe implements PipeTransform {

  transform(imageName: any, args?: any): any {
    return `${API.IMAGES_BASE_URL}/${imageName}`;
  }

}
