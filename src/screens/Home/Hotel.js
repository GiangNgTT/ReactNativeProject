import {FlatList, Image, ActivityIndicator,  TouchableOpacity, Dimensions, ImageBackground, StyleSheet, Text, View, RefreshControl,} from 'react-native';
import React, {useRef, useEffect} from 'react';
import getHotelsThunk from '../../redux/Hotels/thunk';
import {useDispatch, useSelector} from 'react-redux';

const SCREEN_WIDTH = Dimensions.get('screen').width;

const Hotel = ({route, navigation}) => {

  const dispatch = useDispatch();
  const hotels = useSelector(state => state.getHotelReducer.data);
  const loading = useSelector(state => state.getHotelReducer.loading);

  useEffect(() => {
    dispatch(getHotelsThunk());
  }, []);

  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <ImageBackground
          style={styles.theImage}
          source={{
            uri: 'https://i.pinimg.com/236x/81/b5/3e/81b53ef1f6c676527b836c2b01f786f8.jpg',
          }}></ImageBackground>
        <Text style={{fontSize: 24, textAlign: 'center'}}>Hotel</Text>
      </View>
    );
  };
  
  const renderItem = ({item}) => {
    return (
      <View style={styles.item}>
         <Image
          style={styles.tinyLogo}
          source={{
            uri: item?.image,
          }}
        />
        <Text>{item?.name}</Text>
        <Text>{item?.location}</Text>
        <Text>{item?.price}</Text>
      </View>   
    );
  };
  
  const onLoadMore = () => {};
  const flatList = useRef(null);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        ref={flatList}
        ListHeaderComponent={renderHeader}
        stickyHeaderIndices={[0]}
        keyExtractor={item => item.id}
        data={hotels}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => {
              dispatch(getHotelsThunk());
            }}
          />
        }
        onEndReached={onLoadMore}
      />
    </View>
  );
};

export default Hotel;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  theImage: {
    height: 100,
    width: '100%',
  },
  item: {
    backgroundColor: 'white',
    width: SCREEN_WIDTH,
    height: 120,
    marginTop: 10,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  loadingContainer: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
