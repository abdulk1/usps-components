import { Component, Prop, State, Event, EventEmitter, Element, Listen, h } from '@stencil/core';

type SplitOption = { label: string; value: string };

@Component({
  tag: 'usps-split-button',
  styleUrl: 'usps-split-button.css',
  shadow: true,
})
export class UspsSplitButton {
  @Element() el!: HTMLElement;

  @Prop() label = 'Button Label';
  @Prop() options: string | SplitOption[] = '[]';
  @Prop() disabled = false;
  @Prop() type: 'button' | 'submit' | 'reset' = 'button';

  @State() isOpen = false;

  @Event() uspsPrimaryClick!: EventEmitter<void>;
  @Event() uspsSelect!: EventEmitter<SplitOption>;

  private menuId = `usps-split-menu-${Math.random().toString(36).slice(2)}`;

  private get parsedOptions(): SplitOption[] {
    if (typeof this.options === 'string') {
      try {
        return JSON.parse(this.options);
      } catch {
        return [];
      }
    }
    return this.options;
  }

  private handlePrimaryClick = () => {
    if (!this.disabled) {
      this.uspsPrimaryClick.emit();
    }
  };

  private toggleMenu = () => {
    if (!this.disabled) {
      this.isOpen = !this.isOpen;
    }
  };

  private handleToggleKeyDown = (event: KeyboardEvent) => {
    if (this.disabled) return;

    if (event.key === 'Escape') {
      this.isOpen = false;
      return;
    }

    if (event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowDown') {
      event.preventDefault();
      this.isOpen = !this.isOpen;
    }
  };

  private handleOptionSelect = (option: SplitOption) => {
    this.uspsSelect.emit(option);
    this.isOpen = false;
  };

  @Listen('click', { target: 'window' })
  handleWindowClick(event: MouseEvent) {
    if (!this.isOpen) return;
    if (!this.el.contains(event.target as Node)) {
      this.isOpen = false;
    }
  }

  @Listen('keydown', { target: 'window' })
  handleWindowKeyDown(event: KeyboardEvent) {
    if (this.isOpen && event.key === 'Escape') {
      this.isOpen = false;
    }
  }

  render() {
    const options = this.parsedOptions;

    return (
      <div
        class={{
          'usps-split-button': true,
          'is-open': this.isOpen,
          'is-disabled': this.disabled,
        }}
      >
        <button
          type={this.type}
          class="split-primary"
          onClick={this.handlePrimaryClick}
          disabled={this.disabled}
        >
          {this.label}
        </button>
        <button
          type="button"
          class="split-toggle"
          aria-haspopup="menu"
          aria-expanded={this.isOpen ? 'true' : 'false'}
          aria-controls={this.menuId}
          onClick={this.toggleMenu}
          onKeyDown={this.handleToggleKeyDown}
          disabled={this.disabled}
        >
          <span class="split-caret" aria-hidden="true" />
          <span class="visually-hidden">Toggle menu</span>
        </button>
        {this.isOpen && options.length > 0 && (
          <div class="split-menu" id={this.menuId} role="menu">
            {options.map((option) => (
              <button
                type="button"
                class="split-option"
                role="menuitem"
                onClick={() => this.handleOptionSelect(option)}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }
}
