import { Component, Prop, State, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'usps-alert',
  styleUrl: 'usps-alert.css',
  shadow: true,
})
export class UspsAlert {
  @Prop() variant: 'info' | 'success' | 'warning' | 'error' = 'info';
  @Prop() dismissible = false;
  @Prop() heading = '';

  @State() dismissed = false;

  @Event() uspsDismiss!: EventEmitter<void>;

  private handleDismiss = () => {
    this.dismissed = true;
    this.uspsDismiss.emit();
  };

  render() {
    if (this.dismissed) return null;

    return (
      <div
        class={{
          'usps-alert': true,
          [`variant-${this.variant}`]: true,
        }}
        role="alert"
      >
        <div class="alert-accent" />
        <div class="alert-content">
          {this.heading && <div class="alert-heading">{this.heading}</div>}
          <div class="alert-body">
            <slot />
          </div>
        </div>
        {this.dismissible && (
          <button class="alert-dismiss" onClick={this.handleDismiss} aria-label="Dismiss alert">
            &times;
          </button>
        )}
      </div>
    );
  }
}
