import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'usps-drawer',
  styleUrl: 'usps-drawer.css',
  shadow: true,
})
export class UspsDrawer {
  @Prop() heading = '';
  @Prop({ mutable: true, reflect: true }) open = false;
  @Prop() variant: 'informative' | 'detailed' = 'informative';

  @Event() uspsToggle!: EventEmitter<boolean>;

  private panelId = `usps-drawer-${Math.random().toString(36).slice(2)}`;

  private toggleDrawer = () => {
    this.open = !this.open;
    this.uspsToggle.emit(this.open);
  };

  render() {
    return (
      <div
        class={{
          'usps-drawer': true,
          [`variant-${this.variant}`]: true,
          'is-open': this.open,
        }}
      >
        <button
          class="drawer-header"
          type="button"
          aria-expanded={this.open ? 'true' : 'false'}
          aria-controls={this.panelId}
          onClick={this.toggleDrawer}
        >
          <span class="drawer-title">{this.heading}</span>
          <span class="drawer-caret" aria-hidden="true" />
        </button>
        <div
          id={this.panelId}
          class="drawer-content"
          role="region"
          aria-hidden={this.open ? 'false' : 'true'}
          hidden={!this.open}
        >
          <slot />
        </div>
      </div>
    );
  }
}
