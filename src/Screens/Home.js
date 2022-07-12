import {
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import React, { Fragment } from "react";
import { colors } from "../Theme/Colors";
import Text from "../Components/Text/Text";
import { spacing } from "../Theme/Spacing";

const CartButton = ({ text, color, textColor }) => {
  return (
    <View style={[{ backgroundColor: color }, styles.buttons]}>
      <Text style={{ textTransform: "uppercase", color: textColor }}>
        {text}
      </Text>
    </View>
  );
};

export default function Home({ navigation }) {
  return (
    <Fragment>
      <SafeAreaView style={[styles.container, { flex: 1 }]}>
        <ScrollView>
          <View style={{ flex: 1, position: "relative" }}>
            <Image
              style={{ position: "absolute", top: 63, left: 20 }}
              source={require("../../assets/img/LOGO.png")}
            />
          </View>
          <View style={styles.bottomCard}>
            <Image
              style={{ marginVertical: spacing[5] }}
              source={require("../../assets/img/boxIcon.png")}
            />
            <Text preset="h1" style={{ textAlign: "center" }}>
              Non-Contact Deliveries
            </Text>
            <Text
              preset="small"
              style={{ textAlign: "center", marginVertical: spacing[5] }}
            >
              When placing an order, select the option “Contactless delivery”
              and the courier will leave your order at the door.
            </Text>
            <Pressable onPress={() => navigation.navigate("Details")}>
              <CartButton
                text="order now"
                color={colors.paste}
                textColor={colors.white}
              />
            </Pressable>
            <Pressable onPress={() => alert("Order Canceled")}>
              <CartButton text="dismiss" color="#fff" textColor={colors.grey} />
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
      <SafeAreaView style={{ flex: 0, backgroundColor: colors.white }} />
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.purple,
  },
  bottomCard: {
    marginTop: 312,
    backgroundColor: colors.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: spacing[8],
    height: 584,
    alignItems: "center",
  },
  buttons: {
    height: 56,
    width: 340,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
