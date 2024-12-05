import {
  type BackgroundColorProps,
  type BackgroundColorShorthandProps,
  type BorderProps,
  type LayoutProps,
  type SpacingProps,
  type SpacingShorthandProps,
  backgroundColor,
  border,
  composeRestyleFunctions,
  spacing,
  useRestyle,
} from "@shopify/restyle";
import type { Theme } from "@theme";
import { memo } from "react";
import {
  FlatList as NativeFlatList,
  type FlatListProps as NativeFlatListProps,
} from "react-native";

type RestyleProps = LayoutProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> &
  SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  BackgroundColorShorthandProps<Theme>;

type Props<T> = NativeFlatListProps<T> & RestyleProps;

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacing,
  border,
  backgroundColor,
  spacing,
]);

const FlatList = <T extends Record<string, unknown>>({
  renderItem,
  data,
  ...rest
}: Props<T>) => {
  const props = useRestyle(restyleFunctions, rest);

  return <NativeFlatList renderItem={renderItem} data={data} {...props} />;
};

export default memo(FlatList);
