import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./quickmealcard.style";



const QuickMealCard = ({ item, handleNavigate }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleNavigate}
    >
      <View style={styles.logoContainer}>
        <Image
          source={{uri: item.item_image}}
          resizeMode="cover"
          style={styles.logImage}
        />
      </View>
      

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {item.item_name}
        </Text>
        <Text style={styles.jobType}>By {item.item_cook} Aunty</Text>
      </View>
    </TouchableOpacity>
  );
};

export default QuickMealCard;
