import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'usps-radio',
  styleUrl: 'usps-radio.css',
  shadow: true,
})
export class UspsRadio {
  @Prop() label = '';
  @Prop() name = '';
  @Prop() value = '';
  @Prop({ mutable: true }) checked = false;
  @Prop() error = '';
  @Prop() disabled = false;

  @Event() uspsChange!: EventEmitter<string>;

  private handleChange = () => {
    if (!this.disabled) {
      this.checked = true;
      this.uspsChange.emit(this.value);
    }
  };

  render() {
    const radioId = `usps-radio-${this.name}-${this.value || Math.random().toString(36).slice(2)}`;
    return (
      <div class={{ 'usps-radio-wrapper': true, 'has-error': !!this.error }}>
        <label htmlFor={radioId} class="usps-radio-label">
          <input
            id={radioId}
            type="radio"
            class="usps-radio"
            checked={this.checked}
            disabled={this.disabled}
            name={this.name}
            value={this.value}
            role="radio"
            aria-checked={this.checked ? 'true' : 'false'}
            aria-invalid={this.error ? 'true' : undefined}
            onChange={this.handleChange}
          />
          <span class="radio-visual" aria-hidden="true">
            {this.checked && <span class="radio-dot" />}
          </span>
          {this.label && <span class="label-text">{this.label}</span>}
        </label>
        {this.error && (
          <span class="usps-radio-error" role="alert">
            {this.error}
          </span>
        )}
      </div>
    );
  }
}
