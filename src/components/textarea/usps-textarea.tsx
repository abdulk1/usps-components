import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'usps-textarea',
  styleUrl: 'usps-textarea.css',
  shadow: true,
})
export class UspsTextarea {
  @Prop() label = '';
  @Prop({ mutable: true }) value = '';
  @Prop() error = '';
  @Prop() required = false;
  @Prop() disabled = false;
  @Prop() rows = 4;
  @Prop() placeholder = '';
  @Prop() name = '';

  @Event() uspsInput!: EventEmitter<string>;
  @Event() uspsChange!: EventEmitter<string>;

  private handleInput = (e: Event) => {
    const target = e.target as HTMLTextAreaElement;
    this.value = target.value;
    this.uspsInput.emit(this.value);
  };

  private handleChange = (e: Event) => {
    const target = e.target as HTMLTextAreaElement;
    this.value = target.value;
    this.uspsChange.emit(this.value);
  };

  render() {
    const textareaId = `usps-textarea-${this.name || Math.random().toString(36).slice(2)}`;
    return (
      <div class={{ 'usps-textarea-wrapper': true, 'has-error': !!this.error }}>
        {this.label && (
          <label htmlFor={textareaId} class="usps-textarea-label">
            {this.label}
            {this.required && <span class="required">*</span>}
          </label>
        )}
        <textarea
          id={textareaId}
          class="usps-textarea"
          rows={this.rows}
          disabled={this.disabled}
          required={this.required}
          placeholder={this.placeholder}
          name={this.name}
          aria-invalid={this.error ? 'true' : undefined}
          aria-describedby={this.error ? `${textareaId}-error` : undefined}
          onInput={this.handleInput}
          onChange={this.handleChange}
        >
          {this.value}
        </textarea>
        {this.error && (
          <span id={`${textareaId}-error`} class="usps-textarea-error" role="alert">
            {this.error}
          </span>
        )}
      </div>
    );
  }
}
