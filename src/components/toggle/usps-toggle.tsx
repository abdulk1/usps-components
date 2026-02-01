import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'usps-toggle',
  styleUrl: 'usps-toggle.css',
  shadow: true,
})
export class UspsToggle {
  @Prop() label = '';
  @Prop({ mutable: true }) checked = false;
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
    const toggleId = `usps-toggle-${this.name || Math.random().toString(36).slice(2)}`;
    return (
      <div class="usps-toggle-wrapper">
        <label htmlFor={toggleId} class="usps-toggle-label">
          <input
            id={toggleId}
            type="checkbox"
            class="usps-toggle-input"
            checked={this.checked}
            disabled={this.disabled}
            name={this.name}
            role="switch"
            aria-checked={this.checked ? 'true' : 'false'}
            onChange={this.handleChange}
          />
          <span class={{ 'toggle-track': true, 'is-checked': this.checked }} aria-hidden="true">
            <span class="toggle-thumb" />
          </span>
          {this.label && <span class="label-text">{this.label}</span>}
        </label>
      </div>
    );
  }
}
