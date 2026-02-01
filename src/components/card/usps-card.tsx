import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'usps-card',
  styleUrl: 'usps-card.css',
  shadow: true,
})
export class UspsCard {
  @Prop() variant: 'large' | 'small' | 'image' = 'large';
  @Prop() heading = '';

  render() {
    return (
      <div
        class={{
          'usps-card': true,
          [`variant-${this.variant}`]: true,
        }}
      >
        {this.variant === 'image' && (
          <div class="card-image">
            <slot name="image" />
          </div>
        )}
        <div class="card-content">
          {this.heading && <h3 class="card-heading">{this.heading}</h3>}
          <slot />
        </div>
        <div class="card-footer">
          <slot name="footer" />
        </div>
      </div>
    );
  }
}
