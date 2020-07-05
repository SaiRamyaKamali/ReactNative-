import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Picker, Switch, Button } from 'react-native';
import { Card } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import DateTimePicker from '@react-native-community/datetimepicker';


class Reservation extends Component {

    constructor(props) {
        super(props);

        this.state = {
            guests: 1,
            smoking: false,
            date: new Date(1598051730000),
            mode:'',
            show: '',
        }
    }

    


    static navigationOptions = {
        title: 'Reserve Table',
    };

    handleReservation() {
        console.log(JSON.stringify(this.state));
        this.setState({
            guests: 1,
            smoking: false,
            date: ''
        });
    }
    render() {

       const {date}= this.state.date;
       const mode= this.state.mode
       const show = this.state.show

      
      

        return(
            <ScrollView>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Number of Guests</Text>
                    <Picker
                        style={styles.formItem}
                        selectedValue={this.state.guests}
                        onValueChange={(itemValue, itemIndex) => this.setState({guests: itemValue})}>
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="3" value="3" />
                        <Picker.Item label="4" value="4" />
                        <Picker.Item label="5" value="5" />
                        <Picker.Item label="6" value="6" />
                    </Picker>
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Smoking/Non-Smoking?</Text>
                    <Switch
                        style={styles.formItem}
                        value={this.state.smoking}
                        onTintColor='#512DA8'
                        onValueChange={(value) => this.setState({smoking: value})}>
                    </Switch>
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Date and Time</Text>
                    <DateTimePicker 
                         value={ date }
                         mode='default'
                         display='default'
                         onChange={ date => this.setState({ date }) } 
                    />
                    
                </View>
                <View style={styles.formRow}>
                <Button
                    onPress={() => this.handleReservation()}
                    title="Reserve"
                    color="#512DA8"
                    accessibilityLabel="Learn more about this purple button"
                    />
                </View>
            </ScrollView>
        );
    }

};

const styles = StyleSheet.create({
    formRow: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      flexDirection: 'row',
      margin: 20
    },
    formLabel: {
        fontSize: 18,
        flex: 2
    },
    formItem: {
        flex: 1
    }
});

export default Reservation;