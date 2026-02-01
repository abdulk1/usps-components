import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'usps-input',
  styleUrl: 'usps-input.css',
  shadow: true,
})
export class UspsInput {
  @Prop() label = '';
  @Prop() placeholder = '';
  @Prop({ mutable: true }) value = '';
  @Prop() type = 'text';
  @Prop() error = '';
  @Prop() required = false;
  @Prop() disabled = false;
  @Prop() name = '';

  @Event() uspsInput!: EventEmitter<string>;
  @Event() uspsChange!: EventEmitter<string>;

  private handleInput = (e: Event) => {
    const target = e.target as HTMLInputElement;
    this.value = target.value;
    this.uspsInput.emit(this.value);
  };

  private handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    this.value = target.value;
    this.uspsChange.emit(this.value);
  };

  render() {
    const inputId = `usps-input-${this.name || Math.random().toString(36).slice(2)}`;
    return (
      <div class={{ 'usps-input-wrapper': true, 'has-error': !!this.error }}>
        {this.label && (
          <label htmlFor={inputId} class="usps-input-label">
            {this.label}
            {this.required && <span class="required" aria-hidden="true">*</span>}
            {this.required && <span class="visually-hidden">(required)</span>}
          </label>
        )}
        <input
          id={inputId}
          type={this.type}
          class="usps-input"
          value={this.value}
          placeholder={this.placeholder}
          disabled={this.disabled}
          required={this.required}
          name={this.name}
          aria-invalid={this.error ? 'true' : undefined}
          aria-describedby={this.error ? `${inputId}-error` : undefined}
          onInput={this.handleInput}
          onChange={this.handleChange}
        />
        {this.error && (
          <span id={`${inputId}-error`} class="usps-input-error" role="alert">
            {this.error}
          </span>
        )}
      </div>
    );
  }
}
