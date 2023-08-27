import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./popularitemcard.style";

import { icons } from "../../../../constants";

// import { checkImageURL } from "../../../../utils";

const PopularItemCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={item.image}
          resizeMode="cover"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {item.title}
        </Text>
        <View style={styles.ratingContainer}>
          <Image
            source={icons.star}
            resizeMode="cover"
            style={styles.RatingImg(15)}
          />
          <Text style={styles.rate}>
            {item.rating}/5.0
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PopularItemCard;
