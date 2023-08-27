import { useState } from "react";
import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, SIZES } from "../constants";
import { ScreenHeaderBtn, Welcome, Popularitems, Quickmeal } from "../components";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        
      {/* HEADER  */}
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.logo} dimension="150%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.cart} dimension="60%" />
          ),
          headerTitle: "",
        }}
      />

      {/* MAIN PAGE  */}
      <ScrollView>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome />
          <Popularitems />
          <Quickmeal />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
