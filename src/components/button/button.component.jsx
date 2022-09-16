import { GreenButton, WhiteButton} from './button.styles';

export const BUTTON_TYPES = {
  green: 'green',
  white: 'white' 
}

const getButton = (buttonType=BUTTON_TYPES.green) => (
  {
    [BUTTON_TYPES.green]: GreenButton,
    [BUTTON_TYPES.white]: WhiteButton,
  }[buttonType]
)

function Button({ children, buttonType, ...otherProps}) {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton {...otherProps}>{children}</CustomButton>
  )
}

export default Button;