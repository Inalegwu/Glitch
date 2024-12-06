import { createBox } from "@shopify/restyle";
import type { Theme } from "@theme";
import Animated from "react-native-reanimated";

export const AnimatedBox = createBox<Theme>(Animated.View);
