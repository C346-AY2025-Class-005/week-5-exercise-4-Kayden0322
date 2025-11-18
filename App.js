import React from "react";
import {StyleSheet,Text,View,
Image,TouchableOpacity,SectionList,SafeAreaView,Animated,} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const sections = [
    {
      title: "FPS Games",
      icon: "crosshair",
      color: "#cce4ff",
      data: [
        {
          name: "Rainbow Six Siege",
          img: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/29vfowhNB6MLBBkIMyvWmG/a8cc72ded8efe648be8463460571cb90/R6M_Stamp-Banner_960x540-Blog.jpg",
        },
        {
          name: "Ultrakill",
          img: "https://m.media-amazon.com/images/M/MV5BNGIyZDE4OTYtNjBhOS00NzFkLTkyYWMtYzAzNWUxZThmMDBlXkEyXkFqcGc@._V1_.jpg",
        },
      ],
    },
    {
      title: "Horror Games",
      icon: "skull-outline",
      color: "#f7c0c0",
      data: [
        {
          name: "Five Nights at Freddy's",
          img: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA18362_00/1/i_cd6a177c374f229f9cd8e1164a78d49f78af97820747d480daf8cdd3e965c248/i/icon0.png",
        },
        {
          name: "Silent Hill F",
          img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQk_VtY7Gmen5hCDHYC4R37amoJR4zJIes2pRUdUGFxJ7kPNZ2R",
        },
      ],
    },
    {
      title: "Party Games",
      icon: "happy-outline",
      color: "#fff5b8",
      data: [
        {
          name: "Jack Box",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNsIhhEcUrjXWFAdIFPMT5SCIzvsKOHjHiGw&s",
        },
        {
          name: "Make Way",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYwl20SrKiUvTZAbgB0CfSAygI8MBiRvwsFg&s",
        },
      ],
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <Text style={styles.headerText}>🎮 Favourite Games</Text>
      </View>
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item.name + index}
        renderSectionHeader={({ section }) => (
          <View style={[styles.sectionHeader, { backgroundColor: section.color }]}>
            <Ionicons name={section.icon} size={20} color="#333" />
            <Text style={styles.sectionTitle}>{section.title}</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} activeOpacity={0.8}>
            <View style={styles.cardLeft}>
              <Text style={styles.gameName}>{item.name}</Text>
            </View>

            <Image source={{ uri: item.img }} style={styles.cardImage} />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eef2f7",
  },

  header: {
    backgroundColor: "#4a90e2",
    paddingVertical: 22,
    alignItems: "center",
    marginBottom: 10,
    elevation: 4,
  },

  headerText: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    letterSpacing: 1,
  },

  sectionHeader: {
    flexDirection: "row",
    padding: 12,
    paddingLeft: 15,
    alignItems: "center",
    borderRadius: 6,
    marginHorizontal: 12,
    marginTop: 15,
  },

  sectionTitle: {
    marginLeft: 10,
    fontSize: 17,
    fontWeight: "700",
    color: "#333",
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 12,
    borderRadius: 10,
    marginHorizontal: 12,
    marginVertical: 6,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
  },

  cardLeft: {
    flex: 1,
    paddingRight: 10,
  },

  gameName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },

  cardImage: {
    width: 110,
    height: 140,
    borderRadius: 10,
    backgroundColor: "#ddd",
  },
});
