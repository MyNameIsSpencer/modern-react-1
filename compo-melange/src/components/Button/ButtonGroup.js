
import Button from './Button';
import { ButtonTypesEnum, ButtonShapesEnum, ButtonSizesEnum } from './Button';




export default function ButtonGroup({}) {
  const loggit = (str = '') => {
    console.log(`Button Clicked: ${str}`);
  }

  return (
    <div>
      <div onClick={loggit}>
        <Button>Primary</Button>
      </div>
      <div onClick={loggit}>
        <Button
          shape={ButtonShapesEnum.pill}
          size={ButtonSizesEnum.small}
          border={true}
          hollow={false}
          gradient={true}
          shadow={true}
        >
          Small Primary
        </Button>
      </div>
      <div>
        <Button
          onClick={() => {console.log('succcessss')}}
          type={ButtonTypesEnum.success}
          shape={ButtonShapesEnum.rounded}
          size={ButtonSizesEnum.small}
          border={true}
          hollow={false}
          gradient={false}
          shadow={true}
        >
          Small Success
        </Button>
      </div>
      <div>
        <Button
          onMouseEnter={() => {console.log('mouse entering successs')}}
          type={ButtonTypesEnum.success}
          shape={ButtonShapesEnum.pill}
          size={ButtonSizesEnum.big}
          border={true}
          hollow={false}
          gradient={true}
          shadow={true}
        >
          Big Success
        </Button>
      </div>

      <div>
        <Button
          type={ButtonTypesEnum.warning}
          shape={ButtonShapesEnum.box}
          size={ButtonSizesEnum.medium}
          border={false}
          hollow={false}
          gradient={false}
          shadow={false}
        >
          Warning
        </Button>
      </div>
      <div>
        <Button
          type={ButtonTypesEnum.warning}
          shape={ButtonShapesEnum.rounded}
          size={ButtonSizesEnum.big}
          border={false}
          hollow={true}
          gradient={false}
          shadow={false}
        >
          Warning
        </Button>
      </div>
      
      <div>
        <Button
          type={ButtonTypesEnum.danger}
          shape={ButtonShapesEnum.rounded}
          size={ButtonSizesEnum.big}
          border={true}
          gradient={true}
          shadow={true}
        >
          Danger
        </Button>
      </div>
      <div>
        <Button
          type={ButtonTypesEnum.danger}
          shape={ButtonShapesEnum.pill}
          hollow={true}
          shadow={true}
        >
          Danger
        </Button>
      </div>
      <div>
        <Button
          type={ButtonTypesEnum.danger}
          shape={ButtonShapesEnum.box}
          size={ButtonSizesEnum.small}
          shadow={true}
        >
          Small Danger
        </Button>
      </div>
      <div>
        <Button
          type={ButtonTypesEnum.disabled}
          shape={ButtonShapesEnum.pill}
          hollow={true}
          shadow={true}
        >
          Disabled
        </Button>
      </div>
      <div>
        <Button
          type={ButtonTypesEnum.disabled}
          shape={ButtonShapesEnum.box}
          size={ButtonSizesEnum.big}
          shadow={true}
        >
          Big Disabled
        </Button>
      </div>
      <div>
        <Button
          type={ButtonTypesEnum.disabled}
          shape={ButtonShapesEnum.box}
          size={ButtonSizesEnum.big}
          gradient={true}
          shadow={true}
        >
          Big Disabled
        </Button>
      </div>

    </div>
  );
}



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
 * outline
 * rounded
 * pill
 * solid
 * shadow
 * 
 */


// onClick
// onKeyDown
// onMouseOver
// ^^ hover?
// onContextMenu


// onFocus
// onBlur
// onError
// onDoubleClick
// onChange



