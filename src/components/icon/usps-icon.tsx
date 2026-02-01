import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'usps-icon',
  styleUrl: 'usps-icon.css',
  shadow: true,
})
export class UspsIcon {
  @Prop() name = '';
  @Prop() size: 'xsm' | 'sm' | 'md' | 'lg' | 'xlg' = 'sm';
  @Prop() color: 'default' | 'success' | 'failure' | 'warning' | 'gray' = 'default';
  @Prop() label = '';

  render() {
    return (
      <span
        class={{
          'usps-icon': true,
          [`size-${this.size}`]: true,
          [`color-${this.color}`]: true,
        }}
        role={this.label ? 'img' : 'presentation'}
        aria-label={this.label || undefined}
        aria-hidden={!this.label ? 'true' : undefined}
      >
        <slot />
      </span>
    );
  }
}
