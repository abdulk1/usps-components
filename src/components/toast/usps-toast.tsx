import { Component, Prop, State, Event, EventEmitter, Watch, h } from '@stencil/core';

@Component({
  tag: 'usps-toast',
  styleUrl: 'usps-toast.css',
  shadow: true,
})
export class UspsToast {
  @Prop() variant: 'info' | 'success' | 'warning' | 'error' = 'info';
  @Prop() duration = 5000;
  @Prop() position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' = 'top-right';
  @Prop({ mutable: true }) open = false;

  @State() visible = false;

  @Event() uspsDismiss!: EventEmitter<void>;

  private timer?: ReturnType<typeof setTimeout>;

  @Watch('open')
  onOpenChange(newVal: boolean) {
    if (newVal) {
      this.show();
    } else {
      this.hide();
    }
  }

  componentDidLoad() {
    if (this.open) {
      this.show();
    }
  }

  disconnectedCallback() {
    if (this.timer) clearTimeout(this.timer);
  }

  private show() {
    this.visible = true;
    if (this.duration > 0) {
      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(() => this.dismiss(), this.duration);
    }
  }

  private hide() {
    this.visible = false;
  }

  private dismiss = () => {
    this.open = false;
    this.visible = false;
    this.uspsDismiss.emit();
  };

  render() {
    if (!this.visible) return null;

    return (
      <div
        class={{
          'usps-toast': true,
          [`variant-${this.variant}`]: true,
          [`position-${this.position}`]: true,
        }}
        role="status"
        aria-live="polite"
      >
        <div class="toast-content">
          <slot />
        </div>
        <button class="toast-dismiss" onClick={this.dismiss} aria-label="Dismiss">
          &times;
        </button>
      </div>
    );
  }
}
