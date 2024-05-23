export const seo = {
  title: "DabAuth - 登录系统",
  description: "DabAuth 是一款高度定制化的登录系统，旨在为您的应用程序提供全方位的身份验证和访问控制解决方案。基于 Next-auth v5（Auth.js）和 Next.js 14 的强大框架，DabAuth 提供了一系列强大的功能，包括凭证提供程序、OAuth 提供程序（支持 Google 和 GitHub 社交登录）、忘记密码功能、电子邮件验证、双因素验证（2FA）、用户角色管理等。",
  url: new URL(
    process.env.NODE_ENV === "production"
      ? "https://auth.dabaz.me"
      : "http://localhost:3000"
  ),
  imageSrc: "https://auth.dabaz.me/images/home/opengraph-image.jpg",
  imageAlt: "DabAuth logo featuring a stylized keyhole symbol on the left and the text 'DabAuth' on the right, set against a dark gradient background.",
  siteName: "DabAuth",
} as const;