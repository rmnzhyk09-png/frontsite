function installDom() {
  const history = {
    state: null,
    length: 1,
    pushState() {},
    replaceState() {},
    go() {},
    back() {},
    forward() {},
  }

  const location = {
    href: 'http://localhost/iran',
    protocol: 'http:',
    host: 'localhost',
    hostname: 'localhost',
    port: '',
    pathname: '/iban',
    search: '',
    hash: '',
    replace() {},
    assign() {},
    reload() {},
  }

  const store = new Map()
  const localStorageShim = {
    getItem: (key) => (store.has(key) ? store.get(key) : null),
    setItem: (key, value) => store.set(key, String(value)),
    removeItem: (key) => store.delete(key),
    clear: () => store.clear(),
    key: (index) => Array.from(store.keys())[index] ?? null,
    get length() {
      return store.size
    },
  }

  const windowShim = {
    history,
    location,
    addEventListener() {},
    removeEventListener() {},
    dispatchEvent: () => true,
    getComputedStyle: () => ({ getPropertyValue: () => '' }),
    matchMedia: () => ({ matches: false, addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {}, dispatchEvent() {} }),
    innerWidth: 1200,
    cancelAnimationFrame: () => {},
    requestAnimationFrame: () => 0,
    localStorage: localStorageShim,
  }

  globalThis.localStorage = localStorageShim
  globalThis.location = location
  globalThis.history = history

  globalThis.window = windowShim
  globalThis.document = {
    createElement: () => ({ style: {}, setAttribute() {}, appendChild() {} }),
    createElementNS: () => ({ style: {}, setAttribute() {}, appendChild() {} }),
    getElementById: () => null,
    querySelector: () => null,
    querySelectorAll: () => [],
    body: { appendChild() {} },
    addEventListener() {},
    removeEventListener() {},
    dispatchEvent: () => true,
    head: { appendChild() {} },
  }
  globalThis.addEventListener = () => {}
  globalThis.removeEventListener = () => {}
}

installDom()

async function main() {
  const { createSSRApp } = await import('vue')
  const { renderToString } = await import('vue/server-renderer')
  const { default: App } = await import('/src/app.vue')
  const { default: router } = await import('/src/router.js')

  for (const route of router.getRoutes()) {
    router.push(route.path)
    await router.isReady()
    const app = createSSRApp(App)
    app.use(router)
    const html = await renderToString(app)
    if (!html || html.length === 0) throw new Error(`empty render for ${route.path}`)
    console.log(`OK  ${route.path}  (${html.length} chars)`)
  }
  process.exit(0)
}

main().catch((err) => {
  console.error('FAIL', err)
  process.exit(1)
})