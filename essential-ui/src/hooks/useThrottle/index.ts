type ThrottleFn<T extends unknown[] = []> = (...args: T) => void;

const useThrottle = <T extends unknown[], U extends ThrottleFn<T>>(cb: U, delay = 1000) => {
  let shouldWait = false;
  let waitingArgs: T | null = null;

  const timeoutFunc = () => {
    if (waitingArgs == null) {
      shouldWait = false;
    } else {
      cb(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, delay);
    }
  };

  return (...args: T) => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }

    cb(...args);
    shouldWait = true;

    setTimeout(timeoutFunc, delay);
  };
};


export default useThrottle;