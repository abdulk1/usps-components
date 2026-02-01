import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'usps-tooltip',
  styleUrl: 'usps-tooltip.css',
  shadow: true,
})
export class UspsTooltip {
  @Prop() content = '';
  @Prop() position: 'top' | 'bottom' | 'left' | 'right' = 'top';

  @State() visible = false;

  private show = () => {
    this.visible = true;
  };

  private hide = () => {
    this.visible = false;
  };

  render() {
    return (
      <div
        class="usps-tooltip-wrapper"
        onMouseEnter={this.show}
        onMouseLeave={this.hide}
        onFocusin={this.show}
        onFocusout={this.hide}
      >
        <slot />
        {this.visible && (
          <div
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
