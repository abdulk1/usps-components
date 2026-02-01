import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'usps-callout',
  styleUrl: 'usps-callout.css',
  shadow: true,
})
export class UspsCallout {
  @Prop() heading = '';
  @Prop() variant: 'plain' | 'icon' = 'plain';

  render() {
    return (
      <div
        class={{
          'usps-callout': true,
          [`variant-${this.variant}`]: true,
        }}
      >
        <div class="callout-icon">
          <slot name="icon" />
        </div>
        <div class="callout-body">
          {this.heading && <h3 class="callout-heading">{this.heading}</h3>}
          <slot />
        </div>
      </div>
    );
  }
}
