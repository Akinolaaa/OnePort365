import { GreenButton, WhiteButton, GreyButton } from './button.styles';

export const BUTTON_TYPES = {
  green: 'green',
  white: 'white',
  grey: 'grey'
}

const getButton = (buttonType=BUTTON_TYPES.green) => (
  {
    [BUTTON_TYPES.green]: GreenButton,
    [BUTTON_TYPES.white]: WhiteButton,
    [BUTTON_TYPES.grey]: GreyButton
  }[buttonType]
)

function Button({ children, buttonType, ...otherProps}) {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton {...otherProps}>{children}</CustomButton>
  )
}

export default Button;