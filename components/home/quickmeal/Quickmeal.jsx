import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";

import styles from "./quickmeal.style";
import { COLORS, images } from "../../../constants";
import QuickMealCard from "../../common/cards/quickmeal/QuickMealCard";

import useFetch from "../../../hook/useFetch";


// const data = [
//     {
//       id: 1,
//       image: images.food5,
//       title: "Dosa & Chutney",
//       rating: 4.0,
//       cook: "Manisha Aunty"
//     },
//     {
//       id: 2,
//       image: images.food6,
//       title: "Fried Rice ",
//       rating: 3.5,
//       cook: "Urmila Aunty"
//     },
//     {
//       id: 3,
//       image: images.food7,
//       title: "Chicken Curry",
//       rating: 4.5,
//       cook: "Rani Aunty"
//     },
//     {
//       id: 4,
//       image: images.food8,
//       title: "Dal Fry",
//       rating: 3.0,
//       cook: "Pinky Aunty"
//     },
//   ];


const Quickmeal = () => {
  const router = useRouter();
  // const isLoading = false;
  // const error = false;

  const { data, isLoading, error } = useFetch("meals");
  // console.log(data)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Quick meals</Text>
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
          data?.map((item) => (
            <QuickMealCard
              item={item}
              key={`quick-meal-${item?._id}`}
              handleNavigate={() => router.push(`/meal-details/${item._id}`)}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default Quickmeal;
