export function debounce(fn:Function, delay=500) {
  let timer:any = null
  return () => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(function() {
      fn.apply(this, arguments)
      timer = null
    }, delay)
  }
}

export function throttle(fn, delay=500) {
  let timer:any = null
  return function() {
    if (timer) {
      return
    }
    timer = setTimeout(function() {
      fn.apply(this, arguments)
      timer = null
    }, delay)
  }
}