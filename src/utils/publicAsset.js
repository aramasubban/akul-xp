export function pub(path) {
  return import.meta.env.BASE_URL + path.replace(/^\//, '')
}

const ASSET_RE = /\.(webp|svg|png|jpe?g|gif|ico|mp4|mp3)$/i

// Recursively rewrites root-absolute asset paths (e.g. "/img/x.webp") found
// anywhere in a JSON data structure so they resolve under Vite's base path.
export function pubDeep(value) {
  if (typeof value === 'string') {
    return value.startsWith('/') && ASSET_RE.test(value) ? pub(value) : value
  }
  if (Array.isArray(value)) {
    return value.map(pubDeep)
  }
  if (value && typeof value === 'object') {
    const out = {}
    for (const key in value) {
      out[key] = pubDeep(value[key])
    }
    return out
  }
  return value
}
