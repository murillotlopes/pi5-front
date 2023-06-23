import React from 'react';
import { StyleSheet , Text , View }  from 'react-native';
import { LineChart, YAxis, Grid } from 'react-native-svg-charts'

class YAxisExample extends React.PureComponent {
    render() {
        const data = [10, 11, 9, 12, 13, 15, 19, 14, 15, 9, 7, 12, 13, 17, 20]

        const contentInset = { top: 20, bottom: 20 }

        return (
            <View style={{ height: 200, flexDirection: 'row' }}>
                <YAxis
                    data={data}
                    contentInset={contentInset}
                    svg={{
                        fill: 'grey',
                        fontSize: 10,
                    }}
                    numberOfTicks={10}
                    formatLabel={(value) => `${value}ºC`}
                />
                <LineChart
                    style={{ flex: 1, marginLeft: 16 }}
                    data={data}
                    svg={{ stroke: 'rgb(134, 65, 244)' }}
                    contentInset={contentInset}
                >
                    <Grid />
                </LineChart>
            </View>
        )
    }
}

export default function ComprarTitulo() {

  return (
      <View style={{flex : 1}}>
          <YAxisExample />
      </View>
  )
}



