import {useCallback, useContext} from 'react';
import {FlatList, Text, View} from 'react-native';
import AuthContext from '../../../store/auth-context';
import RestaurantMenuItem from '../../../components/UI/RestaurantMenuItem';
import CustomButton from '../../../components/UI/CustomButton';
import styles from '../../../styles/Main/Order/OrderScreen.style';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../../constants/colors';

function OrderScreen() {
  const authContext = useContext(AuthContext);

  const renderOrder = useCallback(
    dataItem => (
      <RestaurantMenuItem
        item={dataItem.item}
        rightComponent={
          <CustomButton
            primary
            onPress={authContext.removeFromCart.bind(null, dataItem.index)}>
            Remove
          </CustomButton>
        }
      />
    ),
    [authContext],
  );

  return (
    <View style={styles.root}>
      {authContext.cart.length === 0 ? (
        <View style={styles.emptyView}>
          <Ionicons name="cart-variant" size={240} color={colors.gray} />
          <Text style={styles.order}>Start Ordering Now!</Text>
        </View>
      ) : (
        <>
          <FlatList
            data={authContext.cart}
            renderItem={renderOrder}
            keyExtractor={(orderItem, index) => index}
          />
          <CustomButton
            style={styles.button}
            onPress={() => {
              console.log('sending order');
            }}
            primary>
            Send
          </CustomButton>
        </>
      )}
    </View>
  );
}

export default OrderScreen;
