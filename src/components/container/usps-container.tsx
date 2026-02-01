import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'usps-container',
  styleUrl: 'usps-container.css',
  shadow: true,
})
export class UspsContainer {
  @Prop() size: 'sm' | 'md' | 'lg' | 'full' = 'lg';

  render() {
    return (
      <div
        class={{
          'usps-container': true,
          [`size-${this.size}`]: true,
        }}
      >
        <slot />
      </div>
    );
  }
}
