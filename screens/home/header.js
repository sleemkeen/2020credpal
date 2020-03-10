import React, { PureComponent } from 'react';
import {  View, Text, TouchableWithoutFeedback } from 'react-native';
import styles from '../../styles';
import {Svg} from "../../controllers/svg";
import {SvgXml, inlineStyles} from 'react-native-svg';


export default class header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={[styles.Homem2]}>
            <View style={[styles.row]}> 
                <View>
                    <Text style={[styles.h1, styles.bold, styles.headerText]}>Good morning,</Text>
                    <Text style={[styles.h1, styles.bold, styles.headerText]}>Daniel</Text>

                </View>
                <TouchableWithoutFeedback  onPress={() => this.props.propnavigate.toggleDrawer()}>
                <View style={[styles.right]}>
                    <SvgXml xml={Svg.hambuger} style={{marginVertical: 20}} />
                </View>
                </TouchableWithoutFeedback>
            </View>
      </View>
    );
  }
}
