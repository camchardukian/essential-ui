type ThrottleFn = (...args: any[]) => void;

const useThrottle = <T extends ThrottleFn>(cb: T, delay = 1000) => {
  let shouldWait = false;
  let waitingArgs: Parameters<T> | null = null;

  const timeoutFunc = () => {
    if (waitingArgs == null) {
      shouldWait = false;
    } else {
      cb(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, delay);
    }
  };

  return (...args: Parameters<T>) => {
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