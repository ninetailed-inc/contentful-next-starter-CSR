import React from 'react';
import classNames from 'classnames';

export type IconProps = 'some SVG icon props';

export type ButtonType = 'button' | 'submit' | 'reset';

export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonVariant = 'primary' | 'secondary';

export interface ButtonProps {
  as?: React.ElementType;
  type: ButtonType;
  size: ButtonSize;
  variant: ButtonVariant;
  /* icon: (props: IconProps) => JSX.Element; */
}

export const Button: React.FC<ButtonProps> = (props) => {
  // Destructuring the props
  /* TODO
   * Component type gets rendered as a button, however, this is not valid HTML
   * https://html.spec.whatwg.org/multipage/text-level-semantics.html#a.attrs.type
   * The "type" attribute must the source of the hyper reference source
   * */
  const {
    as: Component = 'button',
    type,
    size,
    variant,
    children,
    ...rest
  } = props;
  return (
    <div>
      <Component
        {...rest}
        type={type}
        className={classNames(
          `w-full 
            flex  
            border border-transparent
            items-center justify-center`,
          {
            'text-white bg-indigo-600 hover:bg-indigo-700 font-medium rounded shadow-sm':
              variant === 'primary',
          },
          {
            'text-indigo-700 bg-indigo-100 hover:bg-indigo-200 font-medium rounded shadow-sm':
              variant === 'secondary',
          },
          // {"text-gray-300 hover:text-white font-light": props.variant === "footerLink"},
          // {"text-gray-300 hover:text-white font-medium": props.variant === "navLink"},
          { 'px-3 py-1 text-sm': size === 'small' },
          { 'px-4 py-2 text-base': size === 'medium' },
          { 'px-6 py-3 text-base': size === 'large' }
        )}
      >
        {children}
      </Component>
    </div>
  );
};
Button.defaultProps = {
  as: 'a',
};
