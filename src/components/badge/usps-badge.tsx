import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'usps-badge',
  styleUrl: 'usps-badge.css',
  shadow: true,
})
export class UspsBadge {
  @Prop() variant: 'info' | 'success' | 'warning' | 'error' = 'info';
  @Prop() label = '';

  render() {
    return (
      <span
        class={{
          'usps-badge': true,
          [`variant-${this.variant}`]: true,
        }}
      >
        {this.label || <slot />}
      </span>
    );
  }
}
