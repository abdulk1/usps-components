import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'usps-form-field',
  styleUrl: 'usps-form-field.css',
  shadow: true,
})
export class UspsFormField {
  @Prop() label = '';
  @Prop() hint = '';
  @Prop() error = '';
  @Prop() required = false;

  render() {
    return (
      <div class={{ 'usps-form-field': true, 'has-error': !!this.error }}>
        {this.label && (
          <div class="form-field-label">
            <slot name="label">
              <span>
                {this.label}
                {this.required && <span class="required" aria-hidden="true">*</span>}
                {this.required && <span class="visually-hidden">(required)</span>}
              </span>
            </slot>
          </div>
        )}
        {this.hint && (
          <div class="form-field-hint">
            <slot name="hint">{this.hint}</slot>
          </div>
        )}
        <div class="form-field-control">
          <slot />
        </div>
        {this.error && (
          <div class="form-field-error" role="alert">
            <slot name="error">{this.error}</slot>
          </div>
        )}
      </div>
    );
  }
}
