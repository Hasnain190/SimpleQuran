import { StyleSheet, Text, View, FlatList, SectionList, VirtualizedList } from 'react-native'
import React, { useEffect } from 'react'

import QuranData from '../../assets/QuranData.json'

const SurahsObj = QuranData.data.surahs

class Item extends React.PureComponent {
    render() {
        return (
            <View style={styles.item}>
                <Text style={styles.title}>{this.props.title}</Text>
            </View>
        );
    }
}


export default function Ayahs() {

    return (

        <>

            <VirtualizedList
                data={SurahsObj}
                getItem={(data, index) => data[index]}
                getItemCount={data => data.length}
                keyExtractor={(item, index) => index.toString()}


                renderItem={({ item }) =>

                    <VirtualizedList

                        data={item.ayahs}
                        getItem={(data, index) => data[index]}  //{item.ayahs[index]}
                        getItemCount={data => data.length}
                        keyExtractor={(item, index) => index.toString()}

                        renderItem={({ item }) =>


                            <Item title={[item.text, item.number]} />}
                    />

                }
            />


        </>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        borderColor: 'black',
        borderWidth: 1,




    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
})