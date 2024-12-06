import type { ConfigContext, ExpoConfig } from "@expo/config";
import { ClientEnv } from "./env";
import pkg from "./package.json";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "Glitch",
  slug: "glitch",
  scheme: "com.glitch.app",
  icon: "./assets/icon.png",
  newArchEnabled: true,
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: false,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
  },
  web: {
    favicon: "./assets/favicon.png",
  },
  version: pkg.version,
  extra: {
    ...ClientEnv,
  },
  plugins: ["expo-font", "expo-router"],
});
