import React, {Component} from 'react';
import {TouchableHighlight, AppRegistry, ListView,
  StyleSheet, Text, View} from 'react-native';

class ListScreen extends Component {
 constructor() {
   super();
   const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
   this.state = {
     dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 3', 'row 4']),
   };
 }

  render() {
    return (
      <ListView style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text>{rowData}</Text>}
        renderSeparator={(sectionID, rowID, adjacentRowHighlighted) =>
          <View key={rowID} style={{height:1, backgroundColor: 'lightgray'}}/>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container:{
    padding: 10,
    paddingTop:65,
    flex:1
  }
});

export default ListScreen;
