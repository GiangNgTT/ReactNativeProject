import React, {useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Button,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import getHotelsThunk from '../../redux/Hotels/thunk';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const hotels = useSelector(state => state.getHotelReducer.data);
  const loading = useSelector(state => state.getHotelReducer.loading);

  useEffect(() => {
    dispatch(getHotelsThunk());
  }, []);

  const onLoadMore = () => {};

  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <View>
          <Text
            style={{
              justContent: 'flex-start',
              position: 'absolute',
              fontWeight: 'bold',
            }}>
            Hi Ann,{' '}
          </Text>
        </View>
        <View style={styles.avatarSpace}>
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEW1O22S_HG5KBeCfANt3ZyCDs-SPRf4vspA&usqp=CAU',
            }}
          />
        </View>
      </View>
    );
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('MapView', {location: item.locationName});
          }}
          style={styles.item}>
          <View>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: item?.image,
              }}
            />
            <View style={styles.box}>
              <Text style={{fontSize: 17, fontWeight: 'bold' }}>{item?.name}</Text>
              <Text>{item?.price}</Text>
              <Text style={{color: 'blue'}}>{item?.location}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Hotel', {headerTitle: 'Detail Hotel'});
          }}
          style={styles.btn_group}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Booking</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const renderEmpty = () => {
    return (
      <View style={styles.emptyContainer}>
        <Text>Empty</Text>
      </View>
    );
  };

  const renderFooter = () => {
    if (!loading) {
      return null;
    }
    return (
      <View>
        <ActivityIndicator size={'large'} color="red" />
      </View>
    );
  };

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
        ListFooterComponent={renderFooter}
        ListEmptyComponent={renderEmpty}
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

export default Home;

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 10,
    paddingVertical: 24,
    height: 110,
    backgroundColor: 'white',
  },
  avatarSpace: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  avatar: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 30,
    borderColor: 'red',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 24,
  },
  item: {
    backgroundColor: 'white',
    width: SCREEN_WIDTH,
    maxWidth: '100%',
    height: 100,
    marginTop: 10,
  },

  tinyLogo: {
    width: 150,
    height: 80,
  },
  box: {
    position: 'absolute',
    marginLeft: '45%',
  },
  btn_group: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: '52%',
    marginTop: '19%',
    position: 'absolute',
  },
  btn: {
    height: 20,
    width: 70,
    alignItems: 'center',
    backgroundColor: '#EA2A13',
  },
  btnText: {
    color: 'white'
  },
  container: {alignItems: 'center', justifyContent: 'center', flex: 1},
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    backgroundColor: 'pink',
  },
  loadingContainer: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
