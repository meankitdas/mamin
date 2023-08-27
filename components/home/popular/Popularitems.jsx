import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./popularitems.style";
import { COLORS, SIZES, images } from "../../../constants";
import PopularItemCard from "../../common/cards/popular/PopularItemCard";

const data = [
  {
    id: 1,
    image: images.food1,
    title: "Butter Chicken",
    rating: 4.0,
  },
  {
    id: 2,
    image: images.food2,
    title: "Samosha",
    rating: 3.5,
  },
  {
    id: 3,
    image: images.food3,
    title: "Non-veg meal",
    rating: 4.5,
  },
  {
    id: 4,
    image: images.food4,
    title: "South-Indian Thali",
    rating: 3.0,
  },
];

const Popularitems = () => {
  const router = useRouter();
  const isLoading = false;
  const error = false;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Combo</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => <PopularItemCard item={item} />}
            keyExtractor={(item) => item?.id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularitems;
