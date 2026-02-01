import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'usps-link',
  styleUrl: 'usps-link.css',
  shadow: true,
})
export class UspsLink {
  @Prop() href = '#';
  @Prop() variant: 'body' | 'heading' | 'ecommerce' = 'body';
  @Prop() external = false;

  render() {
    return (
      <a
        href={this.href}
        class={{
          'usps-link': true,
          [`variant-${this.variant}`]: true,
        }}
        target={this.external ? '_blank' : undefined}
        rel={this.external ? 'noopener noreferrer' : undefined}
      >
        <slot />
        {this.external && (
          <span class="external-icon" aria-hidden="true">
            &#8599;
          </span>
        )}
        {this.external && (
          <span class="visually-hidden">(opens in a new tab)</span>
        )}
      </a>
    );
  }
}
