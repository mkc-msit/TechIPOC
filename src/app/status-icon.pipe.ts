import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusIcon'
})
export class StatusIconPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    switch (true) {
      case value == 'Success':
        return "green glyphicon glyphicon-ok-sign";
      case value == 'On-hold':
        return "orange glyphicon glyphicon-pause";
      case value == 'Failed':
        return "red glyphicon glyphicon-remove-sign";
      default:
        break;
    }
    return null;
  }

}
