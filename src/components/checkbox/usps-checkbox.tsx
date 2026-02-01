import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'usps-checkbox',
  styleUrl: 'usps-checkbox.css',
  shadow: true,
})
export class UspsCheckbox {
  @Prop() label = '';
  @Prop({ mutable: true }) checked = false;
  @Prop() value = '';
  @Prop() error = '';
  @Prop() disabled = false;
  @Prop() name = '';

  @Event() uspsChange!: EventEmitter<boolean>;

  private handleChange = () => {
    if (!this.disabled) {
      this.checked = !this.checked;
      this.uspsChange.emit(this.checked);
    }
  };

  render() {
    const checkboxId = `usps-checkbox-${this.name || Math.random().toString(36).slice(2)}`;
    return (
      <div class={{ 'usps-checkbox-wrapper': true, 'has-error': !!this.error }}>
        <label htmlFor={checkboxId} class="usps-checkbox-label">
          <input
            id={checkboxId}
            type="checkbox"
            class="usps-checkbox"
            checked={this.checked}
            disabled={this.disabled}
            value={this.value}
            name={this.name}
            role="checkbox"
            aria-checked={this.checked ? 'true' : 'false'}
            aria-invalid={this.error ? 'true' : undefined}
            onChange={this.handleChange}
          />
          <span class="checkbox-visual" aria-hidden="true">
            {this.checked && (
              <svg viewBox="0 0 16 16" fill="none">
                <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            )}
          </span>
          {this.label && <span class="label-text">{this.label}</span>}
        </label>
        {this.error && (
          <span class="usps-checkbox-error" role="alert">
            {this.error}
          </span>
        )}
      </div>
    );
  }
}
