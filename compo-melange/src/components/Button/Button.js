import PropTypes from 'prop-types';
import './Button.scss';

export const ButtonTypesEnum = {
  primary: 'primary',
  success: 'success',
  warning: 'warning',
  danger: 'danger',
  disabled: 'disabled',
}

export const ButtonShapesEnum = {
  box: 'box',
  rounded: 'rounded',
  pill: 'pill',
}

export const ButtonSizesEnum = {
  small: 'small',
  medium: 'medium',
  big: 'big',
}

// implement hover, click state (also focused?)


function Button({
  children,
  type, // enum
  // rounded, // moved to shape
  // pill, // moved to shape
  shape, // enum: box(defualt), rounded, pill
  size, // enum: small, medium, big
  border, // boolean, colour determined by type
  // colour, // covered by type
  hollow, // boolean, mix with type, can't be gradient
  gradient, // boolean, colours determined by type
  shadow, // boolean
  ...rest
}) {

  console.log('Button')


  const chooseButtonClasses = () => {
    // type, gradient, border, shape, shadow, size
    let buttonType = type || ButtonTypesEnum.primary;

    let buttonStyling = '';
    buttonStyling += shadow ? 'shadow' : '';


    switch(type) {
      case ButtonTypesEnum.success:
        if (hollow) {
          buttonStyling += ' hollow hollow-success border'
        } else {
          buttonStyling += ' text-white';
          buttonStyling += gradient ? ' success-gradient' : ' success';
          buttonStyling += border ? ' border' : ' zero-border';
        }
        break;
      case ButtonTypesEnum.warning:
        if (hollow) {
          buttonStyling += ' hollow hollow-warning border'
        } else {
          buttonStyling += ' text-white';
          buttonStyling += gradient ? ' warning-gradient' : ' warning';
          buttonStyling += border ? ' border' : ' zero-border';
        }
        break;
      case ButtonTypesEnum.danger:
        if (hollow) {
          buttonStyling += ' hollow hollow-danger border'
        } else {
          buttonStyling += ' text-white';
          buttonStyling += gradient ? ' danger-gradient' : ' danger';
          buttonStyling += border ? ' border' : ' zero-border';
        }
        break;
      case ButtonTypesEnum.disabled:
               if (hollow) {
          buttonStyling += ' hollow hollow-disabled border'
        } else {
          buttonStyling += ' text-white';
          buttonStyling += gradient ? ' disabled-gradient' : ' disabled';
          buttonStyling += border ? ' border' : ' zero-border';
        }
        break;
      default: // primary
        if (hollow) {
          buttonStyling += ' hollow hollow-primary border'
        } else {
          buttonStyling += ' text-white';
          buttonStyling += gradient ? ' primary-gradient' : ' primary';
          buttonStyling += border ? ' border' : ' zero-border';
        }
    }

    // shape, // enum: box(defualt), rounded, pill
    switch(shape) {
      case ButtonShapesEnum.rounded:
        buttonStyling += ' rounded';
        break;
      case ButtonShapesEnum.pill:
        buttonStyling += ' pill';
        break;
      default: // box
    }

    // size, // enum: small, medium, big
    switch(size) {
      case ButtonSizesEnum.small:
        buttonStyling += ' small';
        break;
      case ButtonSizesEnum.big:
        buttonStyling += ' big';
        break;
      default: // medium
        buttonStyling += ' medium';
    }

    return buttonStyling;

  }

  // ButtonTypesEnum


  return (
    <button {...rest} className={chooseButtonClasses()}>
      {children}
    </button>
  )

}

Button.propTypes = {
  type: PropTypes.oneOf(ButtonTypesEnum),
  shape: PropTypes.oneOf(ButtonShapesEnum),
  size: PropTypes.oneOf(ButtonSizesEnum),
  border: PropTypes.bool,
  hollow: PropTypes.bool,
  gradient: PropTypes.bool,
  shadow: PropTypes.bool,
};


export default Button;




/**
 * onClick
 *   hover, 
 * onMouseEnter
 * onMouseLeave
 * 
 * 
 * Primary
 * Secondary
 * Success
 * Warning
 * Danger
 * Disabled
 * 
 * color
 * gradient (array)
 * border
 * rounded
 * pill
 * solid
 * white
 * shadow
 * 
 * small
 * medium
 * big
 */


