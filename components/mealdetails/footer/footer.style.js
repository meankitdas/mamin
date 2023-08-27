import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: SIZES.small,
    backgroundColor: "#FFF",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 10,
  },
  likeBtn: {
    width: 105,
    height: 55,
    borderWidth: 1,
    borderColor: "#ff5454",
    borderRadius: SIZES.medium,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    // overflow: "hidden",
  },
  likeBtnImage: {
    // width: "20%",
    // height: "20%",
    tintColor: "#ff5454",
  },
  applyBtn: {
    flex: 1,
    backgroundColor: "#ff5454",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: SIZES.medium,
    borderRadius: SIZES.medium,
  },
  applyBtnText: {
    fontSize: SIZES.medium,
    color: COLORS.white,
  },
  minusBtnImage: {
    tintColor: "#ff5454",
    width: 15,
    height: 15,
    
  },
  plusBtnImage: {
    tintColor: "#ff5454",
    width: 15,
    height: 15,
  },
  cartText: {
    fontSize: SIZES.large,
    fontWeight: "bold",
    color: COLORS.primary,
  },
});

export default styles;
