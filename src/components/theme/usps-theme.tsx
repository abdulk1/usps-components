import { Component, Prop, Watch, Element, h } from '@stencil/core';

@Component({
  tag: 'usps-theme',
  shadow: false,
})
export class UspsTheme {
  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) theme: 'light' | 'dark' = 'light';

  @Watch('theme')
  onThemeChange(newVal: string) {
    this.applyTheme(newVal);
  }

  componentWillLoad() {
    this.applyTheme(this.theme);
  }

  private applyTheme(theme: string) {
    this.el.setAttribute('data-theme', theme);
  }

  render() {
    return <slot />;
  }
}
