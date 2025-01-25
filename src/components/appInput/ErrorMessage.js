import React from "react";
import { StyleSheet, View, Text } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

import fonts from "../../constants/fonts";
import colors from "../../constants/colors";

export const ErrorMessage = ({ error }) => {
  if (!error) return null;
  return (
    <View style={styles.error}>
      <AntDesign name="infocirlce" color={colors.red} size={12} />
      <Text style={[styles.errorText, { color: colors.red }]}>{error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  error: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  errorText: {
    fontSize: 12,
    marginLeft: 5,
    color: colors.red,
    fontFamily: fonts.InterRegular,
  },
});
