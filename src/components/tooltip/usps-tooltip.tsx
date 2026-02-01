import { Component, Prop, State, Listen, h } from '@stencil/core';

@Component({
  tag: 'usps-tooltip',
  styleUrl: 'usps-tooltip.css',
  shadow: true,
})
export class UspsTooltip {
  @Prop() content = '';
  @Prop() position: 'top' | 'bottom' | 'left' | 'right' = 'top';

  @State() visible = false;

  private tooltipId = `usps-tooltip-${Math.random().toString(36).slice(2)}`;

  private show = () => {
    this.visible = true;
  };

  private hide = () => {
    this.visible = false;
  };

  @Listen('keydown')
  handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape' && this.visible) {
      this.hide();
    }
  }

  render() {
    return (
      <div
        class="usps-tooltip-wrapper"
        onMouseEnter={this.show}
        onMouseLeave={this.hide}
        onFocusin={this.show}
        onFocusout={this.hide}
        aria-describedby={this.visible ? this.tooltipId : undefined}
      >
        <slot />
        {this.visible && (
          <div
            id={this.tooltipId}
            class={{
              'tooltip-content': true,
              [`position-${this.position}`]: true,
            }}
            role="tooltip"
          >
            {this.content}
            <div class="tooltip-arrow" />
          </div>
        )}
      </div>
    );
  }
}
