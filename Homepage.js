import React, { useState } from "react";
import {
  View,
  ImageBackground,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Homepage = () => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(3);
  const [liked1, setLiked1] = useState(false);
  const [likes1, setLikes1] = useState(11);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  const handleLike1 = () => {
    setLikes1(liked1 ? likes1 - 1 : likes1 + 1);
    setLiked1(!liked1);
  };

  return (
    <View style={styles.containermain}>
      <Text style={styles.facebook}>facebook</Text>
      <View style={styles.iconContainer}>
        <Icon name="home" size={30} color="blue" style={styles.icon} />
        <Icon
          name="users"
          size={30}
          color="rgb(170,170,170)"
          style={styles.icon}
        />
        <Icon
          name="envelope"
          size={30}
          color="rgb(170,170,170)"
          style={styles.icon}
        />
        <Icon
          name="video-camera"
          size={30}
          color="rgb(170,170,170)"
          style={styles.icon}
        />
        <Icon
          name="shopping-basket"
          size={30}
          color="rgb(170,170,170)"
          style={styles.icon}
        />
      </View>

      <ScrollView style={styles.main}>
        <View style={styles.postContainer1}>
          <View style={styles.postPost}>
            <Image
              source={require("./images/i6.jpg")}
              style={styles.postImage}
            />
            <Text style={styles.postName}>Mat Ela</Text>
          </View>
        </View>
        <ScrollView horizontal style={styles.horizontalcontainer}>
          <View style={styles.container}>
            <View style={styles.statusContainer}>
              <ImageBackground
                source={require("./images/i6.jpg")}
                style={styles.statusImage}
                imageStyle={{ borderRadius: 10 }}
              >
                <View style={styles.statusTextContainer}>
                  <Text style={styles.statusName}>Mat</Text>
                </View>
                <View style={styles.postCountContainer}>
                  <Text style={styles.postCount}>3</Text>
                </View>
              </ImageBackground>
            </View>
            <View style={styles.statusContainer}>
              <ImageBackground
                source={require("./images/i2.jpg")}
                style={styles.statusImage}
                imageStyle={{ borderRadius: 10 }}
              >
                <View style={styles.statusTextContainer}>
                  <Text style={styles.statusName}>Sash</Text>
                </View>
                <View style={styles.postCountContainer}>
                  <Text style={styles.postCount}>5</Text>
                </View>
              </ImageBackground>
            </View>
            <View style={styles.statusContainer}>
              <ImageBackground
                source={require("./images/i3.jpg")}
                style={styles.statusImage}
                imageStyle={{ borderRadius: 10 }}
              >
                <View style={styles.statusTextContainer}>
                  <Text style={styles.statusName}>Moony</Text>
                </View>
                <View style={styles.postCountContainer}>
                  <Text style={styles.postCount}>5</Text>
                </View>
              </ImageBackground>
            </View>
            <View style={styles.statusContainer}>
              <ImageBackground
                source={require("./images/i1.jpg")}
                style={styles.statusImage}
                imageStyle={{ borderRadius: 10 }}
              >
                <View style={styles.statusTextContainer}>
                  <Text style={styles.statusName}>Edge</Text>
                </View>
                <View style={styles.postCountContainer}>
                  <Text style={styles.postCount}>7</Text>
                </View>
              </ImageBackground>
            </View>
            <View style={styles.statusContainer}>
              <ImageBackground
                source={require("./images/i5.jpg")}
                style={styles.statusImage}
                imageStyle={{ borderRadius: 10 }}
              >
                <View style={styles.statusTextContainer}>
                  <Text style={styles.statusName}>Maderfa</Text>
                </View>
                <View style={styles.postCountContainer}>
                  <Text style={styles.postCount}>4</Text>
                </View>
              </ImageBackground>
            </View>
          </View>
        </ScrollView>
        <View style={styles.postContainer}>
          <View style={styles.post}>
            <View style={styles.postPost}>
              <Image
                source={require("./images/i4.jpg")}
                style={styles.postImage}
              />
              <Text style={styles.postName}>Sasha .A</Text>
            </View>
            <View style={styles.postContainer}>
              <Text style={styles.postContent}>
                programming post blur blur...
              </Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={[styles.button, liked ? styles.buttonLiked : null]}
                  onPress={handleLike}
                >
                  <Icon
                    name="thumbs-up"
                    size={20}
                    color={liked ? "blue" : "rgb(170,170,170)"}
                  />
                  <Text style={styles.buttonText}>{likes}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Icon name="comment" size={20} color="rgb(170,170,170)" />
                  <Text style={styles.buttonText}>12</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Icon name="share" size={20} color="rgb(170,170,170)" />
                  <Text style={styles.buttonText}>1</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.post}>
            <View style={styles.postPost}>
              <Image
                source={require("./images/i2.jpg")}
                style={styles.postImage}
              />
              <Text style={styles.postName}>Thabo Coder</Text>
            </View>
            <View style={styles.postContainer}>
              <Text style={styles.postContent1}>
                The post on top of this one is not funny lerisque dignissim.
                Duis vitae posuere sem.
              </Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={[styles.button, liked1 ? styles.buttonLiked : null]}
                  onPress={handleLike1}
                >
                  <Icon
                    name="thumbs-up"
                    size={20}
                    color={liked1 ? "blue" : "rgb(170,170,170)"}
                  />
                  <Text style={styles.buttonText}>{likes1}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Icon name="comment" size={20} color="rgb(170,170,170)" />
                  <Text style={styles.buttonText}>23</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Icon name="share" size={20} color="rgb(170,170,170)" />
                  <Text style={styles.buttonText}>2</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  containermain: { flex: 1 },
  postPost: {
    flexDirection: "row",
  },
  container: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  statusContainer: {
    marginRight: 10,
  },
  statusImage: {
    width: 125,
    height: 200,
    justifyContent: "flex-end",
    position: "relative",
  },
  statusTextContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  statusName: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  postCountContainer: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "rgb(0,0,255)",
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
  },
  postCount: {
    color: "rgb(255,255,255)",
    fontSize: 12,
    fontWeight: "bold",
  },
  postContainer: {
    backgroundColor: "white",

    borderBottomWidth: 3.5,
    borderBottomColor: "rgb(200,200,200)",
  },
  postContainer1: {
    backgroundColor: "white",
    marginBottom: 3,
    borderBottomColor: "rgb(111,111,11)",
    borderBottomWidth: 2,
    borderBottomColor: "rgb(200,200,200)",
  },
  post: {
    backgroundColor: "white",

    marginBottom: 10,
    padding: 10,
  },
  postImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginBottom: 10,
  },
  postContent1: {
    backgroundColor: "rgb(255,0,255)",
    fontSize: 20,
    padding: 40,
    color: "white",
  },
  postContent: {
    backgroundColor: "rgb(70,122,70)",
    fontSize: 20,
    padding: 80,
    fontWeight: "bold",
    color: "white",
    height: 200,
  },
  postName: {
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 4,
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 3,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgb(221,221,221)",
    paddingVertical: 5,
    paddingLeft: 20,
    paddingHorizontal: 10,
    borderRadius: 50,

    width: 80,
  },
  buttonText: {
    color: "gray",
    fontWeight: "bold",
    marginLeft: 5,
  },
  buttonLiked: {
    backgroundColor: "rgb(220,220,220)",
  },
  horizontalcontainer: {
    borderBottomColor: "gray",
  },
  facebook: {
    fontSize: 40,
    fontWeight: "bold",
    color: "rgb(60,80,250)",
    backgroundColor: "white",

    marginTop: 10,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingBottom: 8,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "rgb(200,200,200)",
  },
  icon: {
    paddingHorizontal: 10,
  },
});

export default Homepage;
