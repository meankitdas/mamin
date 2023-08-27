import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { COLORS, icons, SIZES } from "../../../constants";

const Welcome = () => {
  const router = useRouter();

  const [value, setValue] = useState("")

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Ankit</Text>
        <Text style={styles.welcomeMessage}>Find your perfect meal</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={value}
            onChange={(e) => {setValue(e)}}
            placeholderTextColor={COLORS.gray2}
            placeholder="What are you looking for?"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
