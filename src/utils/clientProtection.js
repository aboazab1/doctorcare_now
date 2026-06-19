const BLOCKED_SHORTCUTS = new Set(['F12', 'I', 'J', 'C', 'U', 'S'])

function isBlockedShortcut(event) {
  const key = event.key.toUpperCase()
  const usesModifier = event.ctrlKey || event.metaKey

  if (key === 'F12') return true
  if (!usesModifier) return false

  if (event.shiftKey && BLOCKED_SHORTCUTS.has(key)) return true
  if (!event.shiftKey && key === 'U') return true

  return false
}

function blockDevToolsShortcuts() {
  document.addEventListener(
    'keydown',
    (event) => {
      if (isBlockedShortcut(event)) {
        event.preventDefault()
        event.stopPropagation()
      }
    },
    true
  )
}

function detectDevTools() {
  const threshold = 180
  let openChecks = 0

  const check = () => {
    const widthGap = window.outerWidth - window.innerWidth > threshold
    const heightGap = window.outerHeight - window.innerHeight > threshold
    const devToolsOpen = widthGap || heightGap

    if (devToolsOpen) {
      openChecks += 1
      if (openChecks >= 3) {
        window.location.replace(window.location.href)
      }
      return
    }

    openChecks = 0
  }

  window.setInterval(check, 1500)
}

function protectScriptTags() {
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (node.nodeName === 'SCRIPT' && node.src && !node.src.startsWith(window.location.origin)) {
          node.remove()
        }
      }
    }
  })

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
  })
}

export function initClientProtection() {
  if (!import.meta.env.PROD) return

  blockDevToolsShortcuts()
  detectDevTools()
  protectScriptTags()
}
