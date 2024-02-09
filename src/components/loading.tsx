import { ActivityIndicator, Text, View } from "react-native";
import React, { Component } from "react";
import colors from "tailwindcss/colors";
export default class Loading extends Component {
  render() {
    return (
      <View className="flex-1 items-center justify-center bg-slate-900">
        <ActivityIndicator color={colors.white} />
      </View>
    );
  }
}
