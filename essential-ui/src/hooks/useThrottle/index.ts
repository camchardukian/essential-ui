// @TODO -- update the TypeScript to not use 'any'.

const useThrottle = ((cb: any, delay = 1000) => {
    let shouldWait = false
    let waitingArgs: any;
    const timeoutFunc = () => {
      if (waitingArgs == null) {
        shouldWait = false
      } else {
        cb(...waitingArgs)
        waitingArgs = null
        setTimeout(timeoutFunc, delay)
      }
    }
  
    return (...args: any) => {
      if (shouldWait) {
        waitingArgs = args
        return
      }
  
      cb(...args)
      shouldWait = true
  
      setTimeout(timeoutFunc, delay)
    }
})

export default useThrottle;