import React, {useState, useRef, useCallback} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';

import {useStyles} from './styles';
import colors from '../../constants/colors';

import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const DATA = [1, 2, 3, 4, 5];

export const OnBoard = () => {
  const styles = useStyles();
  const flatListRef = useRef(null);
  const navigation = useNavigation();

  const [currentIndex, setCurrentIndex] = useState(0);

  const {user} = useSelector(state => state.authReducer);

  const onViewableItemsChanged = useCallback(({viewableItems}) => {
    setCurrentIndex(viewableItems[0]?.index || 0);
  }, []);

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50});

  const renderItem = useCallback(
    ({item}) => (
      <View style={styles.slide}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={{uri: 'https://picsum.photos/1000/1000'}}
        />
      </View>
    ),
    [styles],
  );

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.infoTxt}>Onboarding screens</Text>
      </View>
      <View style={styles.listSection}>
        <FlatList
          horizontal
          data={DATA}
          pagingEnabled
          ref={flatListRef}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewableItemsChanged}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={styles.pagination}>
        {DATA?.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor:
                  index === currentIndex ? colors.black : colors.lightGrey,
              },
            ]}
          />
        ))}
      </View>
      <Text style={styles.heading}>Feature 01</Text>
      <Text style={styles.subTitle}>Discover new daily</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          user?.username
            ? navigation?.navigate('HomeStack')
            : navigation?.navigate('AuthStack')
        }>
        <Text style={styles.skipTxt}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};
