export interface StyleType {
  $bg?: string;
  $color?: string;
  $radius?: string;
  $shadow?: string;
  $padding?: string;
  $border?: string;
  $margin?: string;
}

export interface CardStyleType extends StyleType {
  $gap?: string 
} 

export interface InputStyleType extends StyleType {
  $focusColor?: string 
} 

export interface SelectStyleType extends StyleType {
  $focusColor?: string 
}

export interface ButtonStyleType extends StyleType {
  $full?: boolean
  $fontSize?: string
}

