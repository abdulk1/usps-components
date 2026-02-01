import { Component, Prop, Event, EventEmitter, Element, Watch, h } from '@stencil/core';

@Component({
  tag: 'usps-modal',
  styleUrl: 'usps-modal.css',
  shadow: true,
})
export class UspsModal {
  @Element() el!: HTMLElement;

  @Prop({ mutable: true, reflect: true }) open = false;
  @Prop() heading = '';
  @Prop() width = '800px';

  @Event() uspsClose!: EventEmitter<void>;

  private previousFocus: HTMLElement | null = null;

  @Watch('open')
  onOpenChange(newVal: boolean) {
    if (newVal) {
      this.previousFocus = document.activeElement as HTMLElement;
      requestAnimationFrame(() => this.trapFocus());
    } else {
      this.previousFocus?.focus();
    }
  }

  componentDidLoad() {
    if (this.open) {
      this.previousFocus = document.activeElement as HTMLElement;
      requestAnimationFrame(() => this.trapFocus());
    }
  }

  private handleKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      this.close();
    }
    if (e.key === 'Tab') {
      this.handleTabTrap(e);
    }
  };

  private handleOverlayClick = (e: MouseEvent) => {
    if ((e.target as HTMLElement).classList.contains('modal-overlay')) {
      this.close();
    }
  };

  private close = () => {
    this.open = false;
    this.uspsClose.emit();
  };

  private trapFocus() {
    const closeBtn = this.el.shadowRoot?.querySelector<HTMLElement>('.modal-close');
    closeBtn?.focus();
  }

  private handleTabTrap(e: KeyboardEvent) {
    const focusable = this.el.shadowRoot?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    if (!focusable || focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const activeEl = this.el.shadowRoot?.activeElement;

    if (e.shiftKey && activeEl === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && activeEl === last) {
      e.preventDefault();
      first.focus();
    }
  }

  render() {
    if (!this.open) return null;

    return (
      <div
        class="modal-overlay"
        onClick={this.handleOverlayClick}
        onKeyDown={this.handleKeydown}
        aria-modal="true"
        role="dialog"
        aria-labelledby={this.heading ? 'modal-heading' : undefined}
        aria-label={!this.heading ? 'Dialog' : undefined}
      >
        <div class="modal-container" style={{ 'max-width': this.width }}>
          <div class="modal-header">
            {this.heading && (
              <h2 id="modal-heading" class="modal-heading">
                {this.heading}
              </h2>
            )}
            <button class="modal-close" onClick={this.close} aria-label="Close dialog">
              &times;
            </button>
          </div>
          <div class="modal-body">
            <slot />
          </div>
          <div class="modal-footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    );
  }
}
