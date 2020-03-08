declare module 'headroom.js' {
  interface HeadroomOptions {
    offset?: number
    tolerance?: number | { up: number, down: number }
    classes?: {
      initial?: 'headroom' | string
      pinned?: 'headroom--pinned' | string
      unpinned?: 'headroom--unpinned' | string
      top?: 'headroom--top' | string
      notTop?: 'headroom--not-top' | string
      bottom?: 'headroom--bottom' | string
      notBottom?: 'headroom--not-bottom' | string
      frozen?: 'headroom--frozen' | string
    }
    scroller?: Window | HTMLElement
    onPin?: () => void
    onUnpin?: () => void
    onTop?: () => void
    onNotTop?: () => void
    onBottom?: () => void
    onNotBottom?: () => void
  }

  export default class Headroom {
    constructor(target: HTMLElement, options?: HeadroomOptions)
    init: () => void
    destroy: () => void
    pin: () => void
    unpin: () => void
    freeze: () => void
    unfreeze: () => void
  }
}
