import { isArray } from 'lodash'
export const googleTagManagerId = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID || ''

declare global {
  /* eslint-disable-next-line */
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export const sendClickEvent = (
  label: string = '',
): void => {
  if (!isArray(window.dataLayer)) window.dataLayer = []
  window.dataLayer.push({
    event: 'click_event',
    label: label
  })
}
