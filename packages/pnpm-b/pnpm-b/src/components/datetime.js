import Component from '@glimmer/component';
import moment from 'moment';

export default class DatetimeComponent extends Component {

  get currentDateAndTime() {
    var datetimer = moment().format('MMMM Do YYYY, h:mm:ss a');
    console.log(datetimer);
    return datetimer;
  }
}
