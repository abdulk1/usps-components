import { Component, Prop, State, Event, EventEmitter, h } from '@stencil/core';

type DrawerItem = { heading: string; description?: string; content: string };

@Component({
  tag: 'usps-drawer',
  styleUrl: 'usps-drawer.css',
  shadow: true,
})
export class UspsDrawer {
  @Prop() heading = '';
  @Prop({ mutable: true, reflect: true }) open = false;
  @Prop() variant: 'informative' | 'detailed' = 'informative';
  @Prop() items: string | DrawerItem[] = '[]';
  @Prop({ mutable: true }) activeIndex = 0;

  @Event() uspsToggle!: EventEmitter<boolean>;
  @Event() uspsChange!: EventEmitter<number>;

  @State() panelId = `usps-drawer-${Math.random().toString(36).slice(2)}`;

  private get parsedItems(): DrawerItem[] {
    if (typeof this.items === 'string') {
      try {
        return JSON.parse(this.items);
      } catch {
        return [];
      }
    }
    return this.items;
  }

  private toggleDrawer = () => {
    this.open = !this.open;
    this.uspsToggle.emit(this.open);
  };

  render() {
    const items = this.parsedItems;
    if (this.variant === 'informative' && items.length > 0) {
      const safeIndex = Math.min(Math.max(this.activeIndex, 0), items.length - 1);
      const activeItem = items[safeIndex];
      return (
        <div class="usps-drawer variant-informative">
          <div class="drawer-nav">
            {items.map((item, index) => (
              <button
                type="button"
                class={{
                  'drawer-nav-item': true,
                  'is-active': index === safeIndex,
                }}
                onClick={() => {
                  this.activeIndex = index;
                  this.uspsChange.emit(index);
                }}
              >
                <div class="drawer-text">
                  <h4 class="drawer-heading">{item.heading}</h4>
                  {item.description && <p class="drawer-description">{item.description}</p>}
                </div>
                <span class="drawer-arrow" aria-hidden="true" />
              </button>
            ))}
          </div>
          <div class="drawer-panel" role="region" aria-live="polite">
            <div class="drawer-content" innerHTML={activeItem?.content || ''} />
          </div>
        </div>
      );
    }

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
