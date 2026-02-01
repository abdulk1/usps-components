import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'usps-button',
  styleUrl: 'usps-button.css',
  shadow: true,
})
export class UspsButton {
  @Prop()
  variant: 'primary' | 'secondary' | 'ecommerce' | 'inactive' | 'icon-combo' | 'ecommerce-icon' =
    'primary';
  @Prop() disabled = false;
  @Prop() selected = false;
  @Prop() size: 'sm' | 'md' | 'lg' = 'md';
  @Prop() type: 'button' | 'submit' | 'reset' = 'button';

  @Event() uspsClick!: EventEmitter<void>;

  private handleClick = () => {
    if (!this.disabled) {
      this.uspsClick.emit();
    }
  };

  render() {
    return (
      <button
        type={this.type}
        class={{
          'usps-button': true,
          [`variant-${this.variant}`]: true,
          'is-selected': this.selected,
          [`size-${this.size}`]: true,
        }}
        disabled={this.disabled}
        onClick={this.handleClick}
        aria-disabled={this.disabled ? 'true' : null}
      >
        <slot />
      </button>
    );
  }
}
