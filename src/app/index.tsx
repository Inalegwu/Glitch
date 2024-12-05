import { SCREEN_WIDTH } from "@/utils/constants";
import { normalize } from "@/utils/functions";
import { Box, Text } from "@atoms";
import {
  Container,
  FlatList,
  Icon,
  Input,
  TouchableOpacity,
} from "@components";
import React from "react";

export default function Page() {
  return (
    <Container padding={3} gap={3}>
      <Box
        flexDirection="row"
        width="100%"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text fontSize={normalize(28)}>Glitch</Text>
        <TouchableOpacity backgroundColor="neutral900" borderRadius="full">
          <Icon name="Bell" size={4} />
        </TouchableOpacity>
      </Box>
      <Box width="100%">
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="flex-start"
          width="100%"
          backgroundColor="neutral900"
          borderRadius={5}
        >
          <Box padding={3}>
            <Icon name="Search" size={4} />
          </Box>
          <Input
            paddingVertical={3}
            width="100%"
            placeholder="Search"
            placeholderTextColor="#ffffff"
          />
        </Box>
      </Box>
      <Box width="100%">
        <Box
          width="100%"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text fontSize={normalize(19)}>Live Now</Text>
          <TouchableOpacity>
            <Text fontSize={normalize(13)} color="neutral700">
              See More
            </Text>
          </TouchableOpacity>
        </Box>
        <FlatList
          horizontal
          data={[
            {
              title: "Lorem Ipsum",
              broadcaster: "dmmmulroy",
            },
            {
              title: "Get in Here",
              broadcaster: "disgruntleddev",
            },
          ]}
          contentContainerStyle={{ gap: 10 }}
          renderItem={({ item }) => {
            return (
              <Box flex={1} width={SCREEN_WIDTH * 0.6}>
                <Box
                  height={100}
                  width="100%"
                  flex={1}
                  backgroundColor="neutral800"
                />
                <Text fontSize={normalize(13)}>{item.title}</Text>
              </Box>
            );
          }}
        />
      </Box>
    </Container>
  );
}
