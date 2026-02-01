import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'usps-stack',
  styleUrl: 'usps-stack.css',
  shadow: true,
})
export class UspsStack {
  @Prop() direction: 'row' | 'column' = 'column';
  @Prop() gap: string = '16px';
  @Prop() align: 'start' | 'center' | 'end' | 'stretch' = 'stretch';

  render() {
    return (
      <div
        class="usps-stack"
        style={{
          'flex-direction': this.direction,
          gap: this.gap,
          'align-items': this.align,
        }}
      >
        <slot />
      </div>
    );
  }
}
