export const ENDPOINTS = {
  AUTH: {
    LOGIN: '/login',
    REGISTER: '/register',
    VERIFY_EMAIL_OTP: '/verify-email-otp',
    RESEND_EMAIL_OTP: '/resend-email-otp',
    FORGOT_PASSWORD: '/forgot-password',
    VERIFY_RESET_OTP: '/verify-reset-otp',
    SET_NEW_PASSWORD: '/set-new-password',
    LOGOUT: '/logout',
  },
} as const;
