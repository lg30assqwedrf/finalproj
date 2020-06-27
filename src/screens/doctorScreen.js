import React from 'react';
//import react in our project
import { Dimensions, View } from 'react-native';
//import basic react native components
import EventCalendar from 'react-native-events-calendar';
//import EventCalendar component
let { width } = Dimensions.get('window');
//get the size of device

export default class App extends React.Component {
  constructor(props) {
    super(props);
    //Dummy event data to list in calendar 
    //You can also get the data array from the API call
    this.state = {
      events: [
        {
          start: '2020-06-27 14:00:00',
          end: '2020-06-27 14:30:00',
          title: '牙醫',
          summary: '提醒:左後方智齒下次要拔',
        },{
          start: '2020-06-28 20:00:00',
          end: '2020-06-28 20:10:00',
          title: '皮膚科門診',
          summary: '提醒:早睡,多喝水,糖少吃',
        },
        {
          start: '2020-07-01 18:00:00',
          end: '2020-07-01 20:20:00',
          title: '斷層掃描',
          summary: '大致處理腦腫瘤',
        },
        {
          start: '2020-07-02 00:00:00',
          end: '2020-07-02 12:00:00',
          title: '住院觀察',
          summary: '加油',
        },
        {
          start: '2019-02-04 04:10:00',
          end: '2019-02-04 04:40:00',
          title: 'Engg Expo 2019',
          summary: 'Expoo Vanue not confirm',
        },
      ],
    };
  }

  eventClicked(event) {
    //On Click oC a event showing alert from here
    alert(JSON.stringify(event));
  }

  render() {
    const minDate = new Date(); // Today
    const maxDate = new Date(2021, 6, 20);
    return (
      <View style={{ flex: 1, marginTop: 20 }}>
        <EventCalendar
          eventTapped={this.eventClicked.bind(this)}
          //Function on event press
          events={this.state.events}
          //passing the Array of event
          width={width}
          //Container width
          size={60}
          
          scrollToFirst
          minDate={minDate}
          maxDate={maxDate}
        />
      </View>
    );
  }
}
