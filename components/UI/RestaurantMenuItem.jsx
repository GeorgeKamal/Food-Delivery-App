import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from '../../styles/UI/RestaurantMenuItem.style';
import colors from '../../constants/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useState} from 'react';

function RestaurantMenuItem({item, rightComponent}) {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const likeHandler = () => {
    if (disliked) {
      item.dislikes--;
      setDisliked(false);
    }
    if (liked) {
      item.likes--;
      setLiked(false);
    } else {
      item.likes++;
      setLiked(true);
    }
  };

  const dislikeHandler = () => {
    if (liked) {
      item.likes--;
      setLiked(false);
    }
    if (disliked) {
      item.dislikes--;
      setDisliked(false);
    } else {
      item.dislikes++;
      setDisliked(true);
    }
  };

  return (
    <View style={styles.main}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: item.image}} />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.name}</Text>
          <View style={styles.likeDisklikeContainer}>
            <TouchableOpacity style={styles.likeDisklike} onPress={likeHandler}>
              <AntDesign
                name={liked ? 'like1' : 'like2'}
                size={14}
                color={colors.gray}
              />
              <Text style={styles.likeDisklikeText}>{item.likes}</Text>
            </TouchableOpacity>
            <Text style={styles.separator}> | </Text>
            <TouchableOpacity
              style={styles.likeDisklike}
              onPress={dislikeHandler}>
              <AntDesign
                name={disliked ? 'dislike1' : 'dislike2'}
                size={14}
                color={colors.gray}
              />
              <Text style={styles.likeDisklikeText}>{item.dislikes}</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.price}>${item.price}</Text>
        </View>
        <View style={styles.rightComponentContainer}>{rightComponent}</View>
      </View>
    </View>
  );
}

export default RestaurantMenuItem;
