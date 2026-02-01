import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'usps-select',
  styleUrl: 'usps-select.css',
  shadow: true,
})
export class UspsSelect {
  @Prop() label = '';
  @Prop() options: string | Array<{ label: string; value: string }> = '[]';
  @Prop({ mutable: true }) value = '';
  @Prop() error = '';
  @Prop() required = false;
  @Prop() disabled = false;
  @Prop() name = '';
  @Prop() placeholder = 'Select an option';

  @Event() uspsChange!: EventEmitter<string>;

  private get parsedOptions(): Array<{ label: string; value: string }> {
    if (typeof this.options === 'string') {
      try {
        return JSON.parse(this.options);
      } catch {
        return [];
      }
    }
    return this.options;
  }

  private handleChange = (e: Event) => {
    const target = e.target as HTMLSelectElement;
    this.value = target.value;
    this.uspsChange.emit(this.value);
  };

  render() {
    const selectId = `usps-select-${this.name || Math.random().toString(36).slice(2)}`;
    const opts = this.parsedOptions;
    return (
      <div class={{ 'usps-select-wrapper': true, 'has-error': !!this.error }}>
        {this.label && (
          <label htmlFor={selectId} class="usps-select-label">
            {this.label}
            {this.required && <span class="required" aria-hidden="true">*</span>}
            {this.required && <span class="visually-hidden">(required)</span>}
          </label>
        )}
        <div class="select-container">
          <select
            id={selectId}
            class="usps-select"
            disabled={this.disabled}
            required={this.required}
            name={this.name}
            aria-invalid={this.error ? 'true' : undefined}
            aria-describedby={this.error ? `${selectId}-error` : undefined}
            onChange={this.handleChange}
          >
            <option value="" disabled selected={!this.value}>
              {this.placeholder}
            </option>
            {opts.map((opt) => (
              <option value={opt.value} selected={this.value === opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <span class="select-arrow" aria-hidden="true">
            &#9662;
          </span>
        </div>
        {this.error && (
          <span id={`${selectId}-error`} class="usps-select-error" role="alert">
            {this.error}
          </span>
        )}
      </div>
    );
  }
}
