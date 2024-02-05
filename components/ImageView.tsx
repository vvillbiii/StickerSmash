import React from "react";
import { StyleSheet, View, Image } from "react-native";

export default function ImageView({ Placeholderimage, selectedImage }) {
  const imageSource = selectedImage ? { uri: selectedImage } : Placeholderimage;
  return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
