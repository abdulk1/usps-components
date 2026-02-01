import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'usps-grid',
  styleUrl: 'usps-grid.css',
  shadow: true,
})
export class UspsGrid {
  @Prop() columns: number | string = 12;
  @Prop() gap: string = '16px';
  @Prop() align: 'start' | 'center' | 'end' | 'stretch' = 'stretch';

  render() {
    const cols = typeof this.columns === 'number' ? `repeat(${this.columns}, 1fr)` : this.columns;
    return (
      <div
        class="usps-grid"
        style={{
          'grid-template-columns': cols,
          gap: this.gap,
          'align-items': this.align,
        }}
      >
        <slot />
      </div>
    );
  }
}
