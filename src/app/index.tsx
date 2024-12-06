import { normalize } from "@/utils/functions";
import { AnimatedBox, Box, Text } from "@atoms";
import { Container, TouchableOpacity } from "@components";
import { useRouter } from "expo-router";
import React from "react";

export default function Page() {
  const router = useRouter();

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
