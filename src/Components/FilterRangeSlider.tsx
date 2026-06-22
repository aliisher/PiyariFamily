import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../Constant/Colors';
import { Fonts } from '../Constant/Fonts';
import { fs, hp, wp } from '../Functions/responsive';

type Props = {
  title: string;
  iconName?: string;
  iconSource?: ImageSourcePropType;
  min: number;
  max: number;
  lowValue: number;
  highValue: number;
  minLabel: string;
  centerLabel: string;
  maxLabel: string;
};

const FilterRangeSlider = ({
  title,
  iconName,
  iconSource,
  min,
  max,
  lowValue,
  highValue,
  minLabel,
  centerLabel,
  maxLabel,
}: Props) => {
  const range = max - min;
  const lowPercent = ((lowValue - min) / range) * 100;
  const highPercent = ((highValue - min) / range) * 100;

  return (
    <View style={styles.wrapper}>
      <View style={styles.sectionHeader}>
        {iconSource ? (
          <Image
            source={iconSource}
            style={styles.sectionIconImage}
            resizeMode="contain"
          />
        ) : iconName ? (
          <Icon name={iconName} size={fs(18)} color={Colors.primary} />
        ) : null}
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.track}>
        <View style={styles.trackBg} />
        <View
          style={[
            styles.trackFill,
            { left: `${lowPercent}%`, width: `${highPercent - lowPercent}%` },
          ]}
        />
        <View style={[styles.thumb, { left: `${lowPercent}%` }]} />
        <View style={[styles.thumb, { left: `${highPercent}%` }]} />
      </View>

      <View style={styles.labelsRow}>
        <Text style={styles.edgeLabel}>{minLabel}</Text>
        <Text style={styles.centerLabel}>{centerLabel}</Text>
        <Text style={styles.edgeLabel}>{maxLabel}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: hp('2.2%'),
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp('2%'),
    marginBottom: hp('1.2%'),
  },
  sectionIconImage: {
    width: fs(18),
    height: fs(18),
  },
  title: {
    fontSize: fs(14),
    fontFamily: Fonts.bold,
    color: Colors.primary,
  },
  track: {
    height: hp('2.8%'),
    justifyContent: 'center',
  },
  trackBg: {
    height: hp('0.7%'),
    borderRadius: wp('1%'),
    backgroundColor: Colors.gradientStart,
  },
  trackFill: {
    position: 'absolute',
    height: hp('0.7%'),
    borderRadius: wp('1%'),
    backgroundColor: Colors.primary,
  },
  thumb: {
    position: 'absolute',
    width: wp('5.5%'),
    height: wp('5.5%'),
    borderRadius: wp('2.75%'),
    backgroundColor: Colors.primary,
    marginLeft: -wp('2.75%'),
    top: '50%',
    marginTop: -wp('2.75%'),
    borderWidth: 2,
    borderColor: Colors.white,
  },
  labelsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp('0.8%'),
  },
  edgeLabel: {
    fontSize: fs(11),
    fontFamily: Fonts.regular,
    color: Colors.textLight,
  },
  centerLabel: {
    fontSize: fs(12),
    fontFamily: Fonts.semiBold,
    color: Colors.primary,
  },
});

export default FilterRangeSlider;
