import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: (selectedJob, item) => ({
    width: 280,
    padding: SIZES.xLarge,
    backgroundColor: "#FFF",
    borderRadius: SIZES.medium,
    justifyContent: "space-between",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
    flexDirection: "row",
    alignItems: "center",
  }),
  logoContainer: (selectedJob, item) => ({
    width: 100,
    height: 100,
    backgroundColor: selectedJob === item.id ? "#FFF" : COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  }),
  logoImage: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: SIZES.medium,
    fontWeight: "bold",
    color: COLORS.primary,
  },

  titleContainer: {
    flex: 1,
    marginLeft: SIZES.small / 1.5,
  },
  RatingImg: (dimension) => ({
    width: dimension,
    height: dimension,
    tintColor: COLORS.gray,
  }),
  ratingContainer: {
    marginTop: SIZES.small / 1.5,
    alignItems: "center",
    flexDirection: "row",
  },
  rate: {
    marginLeft: SIZES.small / 3,
    color: COLORS.gray,
  },
});

export default styles;
