import React from 'react';
import ToggleButtonGroup from './toggle-button-group.component';
import ToggleButton from './toggle-button.component';

const twoButtons = ['Percentage', 'Number'];
const unevenButtons = ['I am short', 'Iamverylongandunbrokentext'];

const renderButtons = ({
  array,
  orientation,
  disabled,
  size = 'medium',
  fullWidth = true,
}) => {
  return (
    <ToggleButtonGroup
      orientation={orientation}
      size={size}
      fullWidth={fullWidth}
    >
      {array.map((text, i) => (
        <ToggleButton
          key={text}
          value={text}
          selected={i === 0}
          disabled={disabled && i !== 0 ? true : false}
        >
          {text}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

const Index = {
  title: 'ToggleButtons',
  component: ToggleButton,
};

export default Index;
export const Default = () =>
  // @ts-ignore
  renderButtons({ array: twoButtons });

export const ThreeButtons = () =>
  // @ts-ignore
  renderButtons({
    array: [...twoButtons, 'Button 3'],
    orientation: 'vertical',
  });

export const SevenButtons = () =>
  // @ts-ignore
  renderButtons({
    array: new Array(7).fill(undefined).map((_, i) => `Button ${i + 1}`),
    orientation: 'vertical',
  });

export const UnevenButtons = () =>
  // @ts-ignore
  renderButtons({ array: unevenButtons });

export const Disabled = () =>
  // @ts-ignore
  renderButtons({ array: twoButtons, disabled: true });

export const GroupWithCustomCss = () => (
  // @ts-ignore
  <ToggleButtonGroup
    orientation="horizontal"
    size="medium"
    fullWidth
    exclusive
    sx={{ border: '2px solid hotpink' }}
  >
    <ToggleButton value selected>
      {twoButtons[0]}
    </ToggleButton>
    <ToggleButton value>{twoButtons[1]}</ToggleButton>
  </ToggleButtonGroup>
);

export const ButtonWithCustomCss = () => (
  // @ts-ignore
  <ToggleButtonGroup orientation="horizontal" size="medium" fullWidth>
    <ToggleButton value selected>
      {twoButtons[0]}
    </ToggleButton>
    <ToggleButton value style={{ backgroundColor: 'hotpink' }}>
      {twoButtons[1]}
    </ToggleButton>
  </ToggleButtonGroup>
);

export const NotFullWidth = () =>
  // @ts-ignore
  renderButtons({ array: twoButtons, fullWidth: false });

export const Sizes = () => (
  <>
    <div style={{ marginBottom: '1rem' }}>
      {/* @ts-ignore */}
      {renderButtons({ array: ['Small', 'Small'], size: 'small' })}
    </div>
    <div style={{ marginBottom: '1rem' }}>
      {/* @ts-ignore */}
      {renderButtons({ array: ['Default', 'Default'] })}
    </div>
    <div style={{ marginBottom: '1rem' }}>
      {/* @ts-ignore */}
      {renderButtons({ array: ['Large', 'Large'], size: 'large' })}
    </div>
  </>
);
