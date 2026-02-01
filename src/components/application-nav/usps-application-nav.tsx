import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';

type AppNavItem = { label: string; href?: string; active?: boolean; external?: boolean };

@Component({
  tag: 'usps-application-nav',
  styleUrl: 'usps-application-nav.css',
  shadow: true,
})
export class UspsApplicationNav {
  @Prop() title = '';
  @Prop() items: string | AppNavItem[] = '[]';
  @Prop() layout: 'desktop' | 'mobile' = 'desktop';
  @Prop() mobileLabel = 'Go to:';

  @Event() uspsNavigate!: EventEmitter<AppNavItem>;

  private get parsedItems(): AppNavItem[] {
    if (typeof this.items === 'string') {
      try {
        return JSON.parse(this.items);
      } catch {
        return [];
      }
    }
    return this.items;
  }

  render() {
    const navItems = this.parsedItems;
    if (this.layout === 'mobile') {
      const selectId = `app-nav-${Math.random().toString(36).slice(2)}`;
      return (
        <div class="usps-application-nav mobile">
          {this.title ? <h4 class="mobile-title">{this.title}</h4> : <slot name="title" />}
          <label class="mobile-label" htmlFor={selectId}>
            {this.mobileLabel}
          </label>
          <div class="mobile-select">
            <select
              id={selectId}
              onChange={(event) => {
                const target = event.target as HTMLSelectElement;
                const index = Number(target.value);
                const item = navItems[index];
                if (item) {
                  this.uspsNavigate.emit(item);
                }
              }}
            >
              <option value="" disabled selected>
                {this.mobileLabel}
              </option>
              {navItems.map((item, index) => (
                <option value={String(index)}>{item.label}</option>
              ))}
            </select>
            <span class="mobile-caret" aria-hidden="true" />
          </div>
        </div>
      );
    }

    return (
      <div class="usps-application-nav">
        <div class="app-title">
          {this.title ? <h1>{this.title}</h1> : <slot name="title" />}
        </div>
        <nav class="app-nav" aria-label="Application navigation">
          <ul class="app-nav-list">
            {navItems.map((item, index) => (
              <li class={{ 'app-nav-item': true, active: !!item.active }}>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noreferrer' : undefined}
                  >
                    <h5>{item.label}</h5>
                  </a>
                ) : (
                  <h5>{item.label}</h5>
                )}
                {index < navItems.length - 1 && <span class="app-nav-divider">/</span>}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  }
}
