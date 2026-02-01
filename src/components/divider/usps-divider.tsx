import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'usps-divider',
  styleUrl: 'usps-divider.css',
  shadow: true,
})
export class UspsDivider {
  @Prop() orientation: 'horizontal' | 'vertical' = 'horizontal';
  @Prop() color = '';

  render() {
    const style = this.color ? { 'background-color': this.color } : {};
    return (
      <hr
        class={{
          'usps-divider': true,
          [`orientation-${this.orientation}`]: true,
        }}
        style={style}
        role="separator"
        aria-orientation={this.orientation}
      />
    );
  }
}
