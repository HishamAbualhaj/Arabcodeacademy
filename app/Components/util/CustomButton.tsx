// ButtonComponent.tsx
import React from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface CustomButtonProps extends ButtonProps {
  text: string;
  icon?: IconType;
  sizeType: 'lg' | 'md' | 'sm';
  ButtonColor:'green' |'orange'
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  icon: Icon,
  sizeType,
  ButtonColor,
  ...rest
}) => {

  const background = {
    green: { backgroundColor: '#00BE98' },
    orange: { backgroundColor: '#FF6542' },
  };

  const { backgroundColor}=background[ButtonColor];
  return (
    <Button
   // width={width}
    //height={height}
    size={sizeType}
      backgroundColor={backgroundColor}
      color="white"
      borderRadius="5px"
      padding="10px 20px"
      gap="10px"
      boxShadow="0px 1px 10px 0px rgba(0, 0, 0, 0.1)"
      {...rest}
    >
     {Icon ? <Icon /> : undefined}
      {text}
    </Button>
  );
};

export default CustomButton;
