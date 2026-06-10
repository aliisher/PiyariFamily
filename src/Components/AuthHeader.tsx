import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { FontSizes } from '../Constant/AuthStyles';
import { Colors } from '../Constant/Colors';
import { Fonts } from '../Constant/Fonts';
import { Strings } from '../Constant/Strings';
import { fs, hp, wp } from '../Functions/responsive';
import AppLogo from './AppLogo';

type Props = {
  compact?: boolean;
};

const AuthHeader = ({ compact = false }: Props) => {
  return (
    <View style={[styles.container, compact && styles.containerCompact]}>
      <View style={compact ? styles.logoCompact : undefined}>
        <AppLogo />
      </View>
      <Text style={[styles.appName, compact && styles.appNameCompact]}>
        {Strings.appName}
      </Text>

      <View style={[styles.starDivider, compact && styles.starDividerCompact]}>
        <View style={styles.dividerLine} />
        <Icon
          name="star-four-points"
          size={fs(10)}
          color={Colors.gold}
          style={styles.starIcon}
        />
        <View style={styles.dividerLine} />
      </View>

      <Text style={styles.tagline}>{Strings.tagline}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: hp('1.5%'),
    marginBottom: hp('2.8%'),
  },
  containerCompact: {
    marginTop: hp('0.3%'),
    marginBottom: hp('0.8%'),
  },
  logoCompact: {
    transform: [{ scale: 0.82 }],
    marginBottom: -hp('0.8%'),
  },
  appName: {
    fontSize: FontSizes.h3,
    color: Colors.primary,
    fontFamily: Fonts.bold,
    marginTop: hp('1.5%'),
    letterSpacing: 0.2,
  },
  appNameCompact: {
    marginTop: hp('0.5%'),
    fontSize: FontSizes.h3 - 2,
  },
  starDivider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('1%'),
    marginBottom: hp('0.7%'),
    width: wp('42%'),
  },
  starDividerCompact: {
    marginTop: hp('0.4%'),
    marginBottom: hp('0.3%'),
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.gold,
    opacity: 0.75,
  },
  starIcon: {
    marginHorizontal: wp('2%'),
  },
  tagline: {
    fontSize: FontSizes.bodySmall,
    color: Colors.gold,
    fontFamily: Fonts.medium,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

export default AuthHeader;
