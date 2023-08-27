import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./meal.style";
import { icons } from "../../../constants";

const Meal = ({ itemLogo, title, cookName, rating }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={{
            uri: itemLogo,
          }}
          style={styles.logoImage}
        />
      </View>

      <View style={styles.itemTitleBox}>
        <Text style={styles.itemTitle}>{title}</Text>
      </View>

      <View style={styles.InfoBox}>
        <Text style={styles.cookName}>By {cookName} Aunty / </Text>
        <View style={styles.locationBox}>
          <Image
            source={icons.star}
            resizeMode="contain"
            style={styles.rateImage}
          />
          <Text style={styles.rating}>{rating} (out of 5)</Text>
        </View>
      </View>
    </View>
  );
};

export default Meal;
