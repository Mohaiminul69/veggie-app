import { View, ScrollView, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import Text from "../Components/Text/Text";
import { colors } from "../Theme/Colors";
import { spacing } from "../Theme/Spacing";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Details() {
  return (
    <ScrollView style={{ position: "relative" }}>
      <View>
        <Image source={require("../../assets/img/Media.png")} />
        <Image
          style={{ position: "absolute", top: 270, left: 165 }}
          source={require("../../assets/img/Dots.png")}
        />
      </View>

      <View style={styles.bottomCard}>
        <Text preset="h1" style={{ fontSize: 30 }}>
          Boston Lettuce
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: spacing[3],
          }}
        >
          <Text preset="h1" style={{ fontSize: 32, marginRight: spacing[2] }}>
            1.10
          </Text>
          <Text preset="h4" style={{ fontSize: 24, color: colors.purpleLight }}>
            € / piece
          </Text>
        </View>
        <Text
          preset="small"
          style={{ color: colors.paste, marginBottom: spacing[4] }}
        >
          ~ 150 gr / piece
        </Text>
        <Text preset="h2" style={{ fontSize: 22 }}>
          Spain
        </Text>
        <Text preset="small" style={{ marginVertical: spacing[2] }}>
          Lettuce is an annual plant of the daisy family, Asteraceae. It is most
          often grown as a leaf vegetable, but sometimes for its stem and seeds.
          Lettuce is most often used for salads, although it is also seen in
          other kinds of food, such as soups, sandwiches and wraps; it can also
          be grilled.
        </Text>

        <View style={{ flexDirection: "row", marginTop: spacing[6] }}>
          <Pressable
            style={{ marginRight: spacing[2] }}
            onPress={() => alert("Added to Favorites")}
          >
            <View
              style={[
                styles.buttons,
                {
                  width: 78,
                  borderColor: colors.grey,
                  borderWidth: 1,
                },
              ]}
            >
              <FontAwesome5 name="heart" size={24} color="grey" />
            </View>
          </Pressable>
          <Pressable style={{ flex: 1 }} onPress={() => alert("Added to curt")}>
            <View
              style={[
                styles.buttons,
                { backgroundColor: colors.paste, flex: 1 },
              ]}
            >
              <Feather name="shopping-cart" size={24} color="white" />
              <Text
                style={{
                  textTransform: "uppercase",
                  color: colors.white,
                  marginLeft: spacing[3],
                }}
              >
                add to cart
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bottomCard: {
    position: "absolute",
    top: 310,
    left: 0,
    right: 0,
    backgroundColor: colors.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingVertical: spacing[8],
    paddingHorizontal: spacing[5],
    height: 584,
  },
  buttons: {
    height: 56,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});
