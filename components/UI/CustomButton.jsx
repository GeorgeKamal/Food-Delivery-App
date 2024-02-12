import React, {useState} from 'react';
import styles from '../../styles/UI/CustomButton.style';
import {Pressable, Text, View} from 'react-native';
import {colors} from '../../constants/Colors';

function CustomButton({style, disabled, onPress, children, primary}) {
  const [isPressed, setIsPressed] = useState(false);

  let viewStyle = isPressed ? [styles.view, styles.viewPressed] : [styles.view];
  let textStyle = isPressed ? [styles.text, styles.textPressed] : [styles.text];

  if (primary) {
    viewStyle.push(
      isPressed
        ? [styles.viewPrimary, styles.viewPrimaryPressed]
        : [styles.viewPrimary],
    );
    viewStyle = viewStyle.flat();

    textStyle.push(
      isPressed
        ? [styles.textPrimary, styles.textPrimaryPressed]
        : [styles.textPrimary],
    );
    textStyle = textStyle.flat();
  } else {
    viewStyle.push(
      isPressed
        ? [styles.viewSecondary, styles.viewSecondaryPressed]
        : [styles.viewSecondary],
    );
    viewStyle = viewStyle.flat();

    textStyle.push(
      isPressed
        ? [styles.textSecondary, styles.textSecondaryPressed]
        : [styles.textSecondary],
    );
    textStyle = textStyle.flat();
  }

  if (disabled) {
    viewStyle.push(styles.viewDisabled);
  }

  if (style) {
    if (Array.isArray(style)) {
      viewStyle.concat(...style);
    } else {
      viewStyle.concat(style);
    }
  }

  return (
    <View style={style}>
      <Pressable
        disabled={disabled}
        onPressIn={setIsPressed.bind(null, true)}
        onPressOut={setIsPressed.bind(null, false)}
        onPress={onPress}>
        <View style={viewStyle}>
          <Text style={textStyle}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CustomButton;
