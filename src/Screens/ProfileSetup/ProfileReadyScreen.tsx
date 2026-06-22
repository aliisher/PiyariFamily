import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { Images } from '../../Assets';
import PrimaryButton from '../../Components/PrimaryButton';
import { AuthStyles, FontSizes } from '../../Constant/AuthStyles';
import { Colors } from '../../Constant/Colors';
import { Fonts } from '../../Constant/Fonts';
import { Strings } from '../../Constant/Strings';
import { hp, wp } from '../../Functions/responsive';

type Props = {
  navigation: {
    replace: (screen: string) => void;
  };
};

const ProfileReadyScreen = ({ navigation }: Props) => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.root} edges={['top', 'left', 'right', 'bottom']}>
      <View style={styles.content}>
        <View style={styles.centerArea}>
          <Image
            source={Images.profileReadyIllustration}
            style={styles.illustration}
            resizeMode="contain"
          />

          <Text style={styles.title}>
            {Strings.profileReadyTitle}{' '}
            <Text style={styles.titleHighlight}>
              {Strings.profileReadyHighlight}
            </Text>
          </Text>
          <Text style={styles.subtitle}>{Strings.profileReadySubtitle}</Text>
        </View>

        <View
          style={[
            styles.footer,
            { paddingBottom: Math.max(insets.bottom, hp('2%')) },
          ]}
        >
          <PrimaryButton
            title={Strings.continueBtn}
            onPress={() => navigation.replace('Main')}
            showArrow
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    flex: 1,
    paddingHorizontal: AuthStyles.horizontalPadding,
  },
  centerArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: hp('2%'),
  },
  illustration: {
    width: wp('55%'),
    height: wp('55%'),
    marginBottom: hp('3%'),
  },
  title: {
    fontSize: FontSizes.h2,
    fontFamily: Fonts.bold,
    color: Colors.label,
    textAlign: 'center',
    marginBottom: hp('1.5%'),
    letterSpacing: -0.3,
    lineHeight: hp('3.2%'),
    paddingHorizontal: wp('2%'),
  },
  titleHighlight: {
    color: Colors.primary,
  },
  subtitle: {
    fontSize: FontSizes.body,
    fontFamily: Fonts.regular,
    color: Colors.textLight,
    textAlign: 'center',
    lineHeight: hp('2.4%'),
    paddingHorizontal: wp('4%'),
  },
  footer: {
    paddingTop: hp('1.5%'),
  },
});

export default ProfileReadyScreen;
