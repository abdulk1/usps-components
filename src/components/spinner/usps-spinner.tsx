import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'usps-spinner',
  styleUrl: 'usps-spinner.css',
  shadow: true,
})
export class UspsSpinner {
  @Prop() size: 'sm' | 'md' | 'lg' = 'md';
  @Prop() color: 'primary' | 'white' = 'primary';

  render() {
    return (
      <div
        class={{
          'usps-spinner': true,
          [`size-${this.size}`]: true,
          [`color-${this.color}`]: true,
        }}
        role="status"
        aria-live="polite"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    );
  }
}
