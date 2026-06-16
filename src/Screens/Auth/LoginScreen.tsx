import React, { useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Toast from 'react-native-simple-toast';
import AuthBackground from '../../Components/AuthBackground';
import AuthFooter from '../../Components/AuthFooter';
import AuthHeader from '../../Components/AuthHeader';
import AuthInput from '../../Components/AuthInput';
import DividerOr from '../../Components/DividerOr';
import PrimaryButton from '../../Components/PrimaryButton';
import SocialButton from '../../Components/SocialButton';
import { AuthStyles, FontSizes } from '../../Constant/AuthStyles';
import { Colors } from '../../Constant/Colors';
import { Fonts } from '../../Constant/Fonts';
import { Strings } from '../../Constant/Strings';
import { hp } from '../../Functions/responsive';

type Props = {
  navigation: {
    navigate: (screen: string) => void;
    replace: (screen: string) => void;
  };
};

const LoginScreen = ({ navigation }: Props) => {
  const insets = useSafeAreaInsets();
  const [email, setEmail] = useState('alisher6269@gmail.com');
  const [password, setPassword] = useState('12345678');
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      Toast.show('Please fill in all fields');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Toast.show('Login successfull');
      navigation.replace('Main');
    }, 1000);
  };

  return (
    <AuthBackground>
      <KeyboardAvoidingView
        style={styles.root}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View
            style={[
              styles.container,
              { paddingBottom: Math.max(insets.bottom, hp('2%')) },
            ]}
          >
            <View style={styles.content}>
              <AuthHeader />

              <View style={styles.formSection}>
                <Text style={styles.title}>{Strings.welcomeBack}</Text>
                <Text style={styles.subtitle}>{Strings.loginSubtitle}</Text>

                <AuthInput
                  label={Strings.emailLabel}
                  iconName="email-outline"
                  placeholder={Strings.emailPlaceholder}
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                />

                <AuthInput
                  label={Strings.passwordLabel}
                  iconName="lock-outline"
                  placeholder={Strings.passwordPlaceholder}
                  value={password}
                  onChangeText={setPassword}
                  showToggle
                  secureTextEntry
                />

                <TouchableOpacity
                  style={styles.forgotBtn}
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('ForgotPassword')}
                >
                  <Text style={styles.forgotText}>
                    {Strings.forgotPassword}
                  </Text>
                </TouchableOpacity>

                <PrimaryButton
                  title={Strings.logIn}
                  onPress={handleLogin}
                  loading={loading}
                />

                <DividerOr />

                <SocialButton
                  provider="google"
                  title={Strings.continueGoogle}
                  onPress={() => Toast.show('Google login coming soon')}
                />
                <SocialButton
                  provider="apple"
                  title={Strings.continueApple}
                  onPress={() => Toast.show('Apple login coming soon')}
                />
              </View>
            </View>

            <AuthFooter
              prefix={Strings.noAccount}
              linkText={Strings.createAccount}
              onPress={() => navigation.navigate('SignUp')}
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </AuthBackground>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: AuthStyles.horizontalPadding,
    justifyContent: 'space-between',
  },
  content: {
    flexShrink: 1,
  },
  formSection: {
    width: '100%',
  },
  title: {
    fontSize: FontSizes.h1,
    color: Colors.primary,
    fontFamily: Fonts.bold,
    marginBottom: hp('0.75%'),
    letterSpacing: -0.3,
  },
  subtitle: {
    fontSize: FontSizes.body,
    color: Colors.textSecondary,
    marginBottom: hp('2%'),
    fontFamily: Fonts.regular,
    lineHeight: hp('2.5%'),
  },
  forgotBtn: {
    alignSelf: 'flex-end',
    marginTop: hp('-0.75%'),
    marginBottom: hp('2.5%'),
  },
  forgotText: {
    fontSize: FontSizes.body,
    color: Colors.gold,
    fontFamily: Fonts.medium,
  },
});

export default LoginScreen;
