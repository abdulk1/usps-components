import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'usps-banner',
  styleUrl: 'usps-banner.css',
  shadow: true,
})
export class UspsBanner {
  @Prop() heading = '';
  @Prop() subtitle = '';
  @Prop() variant: 'hero' | 'marketing' = 'hero';

  render() {
    return (
      <section
        class={{
          'usps-banner': true,
          [`variant-${this.variant}`]: true,
        }}
      >
        <div class="banner-content">
          {this.heading && <h2 class="banner-title">{this.heading}</h2>}
          {this.subtitle && <p class="banner-subtitle">{this.subtitle}</p>}
          <slot />
          <div class="banner-actions">
            <slot name="actions" />
          </div>
        </div>
        <div class="banner-media">
          <slot name="media" />
        </div>
      </section>
    );
  }
}
