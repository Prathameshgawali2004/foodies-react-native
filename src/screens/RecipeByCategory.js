import React, { useState } from "react";
import {
  StatusBar,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  Text,
  Image
} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";

const imageMap = {
  '1': require('../../Assets/breakfast1.jpg'),
  '2': require('../../Assets/breakfast2.jpg'),
  '3': require('../../Assets/breakfast3.jpg'),
  '4': require('../../Assets/breakfast4.jpg'),
  '5': require('../../Assets/lunch1.jpg'),
  '6': require('../../Assets/lunch2.jpg'),
  '7': require('../../Assets/lunch3.jpg'),
  '8': require('../../Assets/lunch4.jpg'),
  '9': require('../../Assets/burger1.jpg'),
  '10': require('../../Assets/burger2.jpg'),
  '11': require('../../Assets/burger3.jpg'),
  '12': require('../../Assets/burger4.jpg'),
};

const data = [
  { id: '1', category: 'Idli', desc: 'Quick breakfast' },
  { id: '2', category: 'Chai', desc: 'Healthy morning meal' },
  { id: '3', category: 'Dosa', desc: 'Tasty dish' },
  { id: '4', category: 'Poha', desc: 'Protein rich food' },
  { id: '5', category: 'Biryani', desc: 'Full meal' },
  { id: '6', category: 'Pasta', desc: 'Spicy lunch' },
  { id: '7', category: 'Pizza', desc: 'Tasty lunch' },
  { id: '8', category: 'PannerRoll', desc: 'Nice lunch' },
  { id: '9', category: 'Hamburger', desc: 'Fried burger' },
  { id: '10', category: 'Grilledburger', desc: 'Tasty burger' },
  { id: '11', category: 'Crispyburger', desc: 'Chilly burger' },
  { id: '12', category: 'Burger', desc: 'Fried burger' },
];

const RecipeByCategory = () => {

  const navigation = useNavigation();
  const [search, setSearch] = useState(""); // only UI

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} />

      {/* Back Button */}
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="chevron-back" size={30} color="black" />
      </TouchableOpacity>





      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() =>
              navigation.navigate("Details", {
                recipe: item,
                image: imageMap[item.id]
              })
            }
          >
            <Image source={imageMap[item.id]} style={styles.itemImage} />
            <View>
              <Text style={styles.itemText}>{item.category}</Text>
              <Text style={{ color: "green" }}>{item.desc}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

    </View>
  );
};

export default RecipeByCategory;

const styles = StyleSheet.create({
  container: { flex: 1 },

  backBtn: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 25,
    marginTop: 20,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },


  item: {
    flexDirection: "row",
    margin: 10,
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },

  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },

  itemText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});