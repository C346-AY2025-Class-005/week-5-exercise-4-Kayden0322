import React from "react";
import {StyleSheet,Text,View,Image, TouchableOpacity,SectionList,SafeAreaView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const sections = [
    {
      title: "FPS Games",
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
      color: "#a00000ff",
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
      title:"Party Games",
      color:"#fff718ff",
      data : [
        {
        name:"Jack Box",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNsIhhEcUrjXWFAdIFPMT5SCIzvsKOHjHiGw&s",
        },
        {
          name:"Make Way",
          img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYwl20SrKiUvTZAbgB0CfSAygI8MBiRvwsFg&s"
        }

      ]
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.headerText}>🎮 Favourite Games</Text>
      </View>
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item.name + index}
        renderSectionHeader={({ section }) => (
          <View
            style={[styles.sectionHeader, { backgroundColor: section.color }]}
          >
            <Ionicons name={section.icon} size={20} color={"#333"} />
            <Text style={styles.sectionTitle}>{section.title}</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.row}>
            <View style={styles.leftColumn}>
              <Text style={styles.gameTitle}>{item.name}</Text>
            </View>

            <Image source={{ uri: item.img }} style={styles.thumbnail} />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
  },

  header: {
    backgroundColor: "#4a90e2",
    paddingVertical: 20,
    alignItems: "center",
    marginBottom: 5,
  },

  headerText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },

  sectionHeader: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  sectionTitle: {
    marginLeft: 8,
    fontWeight: "bold",
    fontSize: 16,
    color: "#333",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    marginVertical: 3,
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 8,

    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },

  leftColumn: {
    flex: 1,
    justifyContent: "center",
  },

  gameTitle: {
    fontSize: 15,
    fontWeight: "600",
  },

  thumbnail: {
    width: 90,
    height: 120,
    borderRadius: 8,
    marginLeft: 10,
  },
});
