/* eslint-disable import/prefer-default-export */
import { format } from 'date-fns';

export function dateToString(date) {
  if (!date) {
    return '';
  }

  return format(date, 'yyyy年M月d日 HH:時mm分');
}
