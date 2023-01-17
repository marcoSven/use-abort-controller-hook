# use-abort-controller

> AbortController hook

[![NPM](https://img.shields.io/npm/v/use-abort-controller.svg)](https://www.npmjs.com/package/use-abort-controller) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-abort-controller-hook
```

## Usage

```tsx
import { useAbortController } from "use-abort-controller-hook";

const App = () => {
  const abortController = useAbortController();

  useEffect(() => {
    fetch("https://www.npmjs.com/package/use-abort-controller-hook", {
      signal: abortController.signal,
    });
    return () => {
      abortController.abort();
    };
  }, [abortController]);

  return <div>Abort</div>;
};
```

## License

MIT © [marcoSven](https://github.com/marcoSven)
