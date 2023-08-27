import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginVertical: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  logoBox: {
    width: 300,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: SIZES.large,
    overflow: "hidden",
  },
  logoImage: {
    width: "100%",
    height: "100%",
  },
  itemTitleBox: {
    marginTop: SIZES.small,
  },
  itemTitle: {
    fontSize: 30,
    color: COLORS.primary,
    fontWeight: "bold",
    textAlign: "center",
  },
  InfoBox: {
    marginTop: SIZES.small / 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  cookName: {
    fontSize: SIZES.medium - 2,
    color: COLORS.primary,
  },
  locationBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  rateImage: {
    width: 14,
    height: 14,
    tintColor: COLORS.gray,
  },
  rating: {
    fontSize: SIZES.medium - 2,
    color: COLORS.gray,

    marginLeft: 2,
  },
});

export default styles;
