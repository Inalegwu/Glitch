import { normalize } from "@/utils/functions";
import { AnimatedBox, Box, Text } from "@atoms";
import { Container, TouchableOpacity } from "@components";
import { Env } from "@env";
import { makeRedirectUri, useAuthRequest } from "expo-auth-session";
import { useRouter } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import React, { useEffect } from "react";

WebBrowser.maybeCompleteAuthSession();

const discovery = {
  authorizationEndpoint: "https://id.twitch.tv/oauth2/authorize",
  tokenEndpoint: "https://id.twitch.tv/oauth2/token",
  revocationEndpoint: "https://id.twitch.tv/oauth2/revoke",
};

export default function Page() {
  const router = useRouter();

  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: Env.EXPO_PUBLIC_TWITCH_CLIENT_ID,
      redirectUri: makeRedirectUri({
        scheme: "com.glitch.app",
      }),
      scopes: [
        "user:read:email",
        "user:bot",
        "user:read:follows",
        "user:edit",
        "user:read:blocked_users",
        "user:read:chat",
        "user:manage:chat_color",
        "user:read:whispers",
        "user:write:chat",
        "user:read:broadcast",
      ],
    },
    discovery,
  );

  useEffect(() => {
    if (response?.type === "success") {
      const { code } = response.params;
      console.log({ code });
    }
  }, [response]);

  return (
    <Container alignItems="center" justifyContent="center">
      <Text fontSize={normalize(28)} color="purple500">
        Glitch
      </Text>
      <Box
        flex={1}
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        position="relative"
      >
        <AnimatedBox
          padding={1}
          backgroundColor="purple600"
          width={250}
          height={330}
          borderRadius={8}
          zIndex={2}
          position="absolute"
          borderWidth={3}
          borderColor="purple800"
          style={{
            transform: [
              {
                rotateZ: "6deg",
              },
            ],
          }}
        />
        <AnimatedBox
          padding={1}
          backgroundColor="purple800"
          width={250}
          height={330}
          borderRadius={8}
          zIndex={1}
          position="absolute"
          borderWidth={3}
          borderColor="purple600"
          style={{
            transform: [
              {
                rotateZ: "-3deg",
              },
            ],
          }}
        />
        <AnimatedBox
          padding={1}
          backgroundColor="purple700"
          width={250}
          height={330}
          borderRadius={8}
          position="absolute"
          zIndex={0}
          borderWidth={3}
          borderColor="purple500"
          style={{
            transform: [
              {
                rotateZ: "2deg",
              },
            ],
          }}
        />
      </Box>
      <Box width="100%" flex={0.6} alignItems="center" justifyContent="center">
        <Text fontSize={normalize(18)} color="neutral300">
          Let's Get Started
        </Text>
        <Text textAlign="center" fontSize={normalize(33)}>
          All Your Favourite Streams In One Place
        </Text>
        <Text fontSize={normalize(16)} color="neutral500">
          Explore The Best of Twitch
        </Text>
      </Box>
      <Box gap={3} width="100%">
        <TouchableOpacity
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          padding={3}
          borderRadius="full"
          width="100%"
          backgroundColor="purple500"
          onPress={() => router.navigate("/login")}
        >
          <Text>Login With Twitch</Text>
        </TouchableOpacity>
        <TouchableOpacity
          alignItems="center"
          justifyContent="center"
          borderWidth={1}
          borderRadius="full"
          borderColor="purple500"
          padding={3}
        >
          <Text>Watch as Guest</Text>
        </TouchableOpacity>
      </Box>
    </Container>
  );
}
