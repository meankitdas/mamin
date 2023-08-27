import { useState } from "react";
import { View, Text, TouchableOpacity, Image, Linking } from "react-native";

import styles from "./footer.style";
import { icons } from "../../../constants";

const Footer = ({ url }) => {
  const [count, setCount] = useState(1);

  const minus = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      alert("Minimum quantity is 1");
    }
  };

  const plus = () => {
    setCount(count + 1);
  };
  return (
    <View style={styles.container}>
      <View style={styles.likeBtn}>
        <TouchableOpacity style={styles.minusBtn} onPress={minus}>
          <Image
            source={icons.minus}
            resizeMode="contain"
            style={styles.minusBtnImage}
          />
        </TouchableOpacity>
        <Text style={styles.cartText}>{count}</Text>
        <TouchableOpacity style={styles.plusBtn} onPress={plus}>
          <Image
            source={icons.add}
            resizeMode="contain"
            style={styles.plusBtnImage}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.applyBtnText}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
