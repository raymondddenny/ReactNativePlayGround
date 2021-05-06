import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

const Story = (props) => {
  return (
    <View style={{ alignItems: "center", marginTop: 10, marginRight: 20 }}>
      <Image
        source={{
          uri:
            "https://instagram.fcgk27-1.fna.fbcdn.net/v/t51.2885-19/s320x320/180862647_129230562528006_7133127463670266345_n.jpg?tp=1&_nc_ht=instagram.fcgk27-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=Esqd6j9E_DQAX-yUFkl&edm=ABfd0MgBAAAA&ccb=7-4&oh=e98f2fc6723ca9b9d7da3111b2601727&oe=60BA56F3&_nc_sid=7bff83",
        }}
        style={{ height: 50, width: 50, borderRadius: 50 / 2 }}
      />
      <Text style={{ maxWidth: 50 }}>{props.title}</Text>
    </View>
  );
};

export default function PropsDinamis() {
  return (
    <View>
      <Text>Belajar Component Dinamis dengan props</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: "row" }}>
          <Story title="Youtube Channel" />
          <Story title="Kelas Online" />
          <Story title="Judul 3" />
          <Story title="Judul 4" />
          <Story title="Judul 5" />
          <Story title="Judul 3" />
          <Story title="Judul 4" />
          <Story title="Judul 5" />
          <Story title="Judul 3" />
          <Story title="Judul 4" />
          <Story title="Judul 5" />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
