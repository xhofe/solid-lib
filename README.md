<p>
  <img width="100%" src="https://assets.solidjs.com/banner?project=solid-lib" alt="solid-named-router">
</p>

# solid-lib

☘ A lib template for [Solidjs](https://solidjs.com).

[![release](https://github.com/Xhofe/solid-lib/actions/workflows/release.yml/badge.svg)](https://github.com/Xhofe/solid-lib/actions/workflows/release.yml)
[![npm](https://img.shields.io/npm/dm/solid-lib.svg)](https://www.npmjs.com/package/solid-lib)
[![npm](https://img.shields.io/npm/v/solid-lib.svg)](https://www.npmjs.com/package/solid-lib)
[![license](https://img.shields.io/github/license/Xhofe/solid-lib.svg)](https://github.com/Xhofe/solid-lib/blob/main/LICENSE)
[![sponsor](https://img.shields.io/badge/%24-sponsor-F87171.svg)](https://sp.nn.ci/)

## Installation

```bash
pnpm add solid-lib
```

## Demo

<https://xhofe.github.io/solid-lib/>

## Usage

```tsx
import { Component } from "solid-lib";

const App = () => {
  const [shown, setShown] = createSignal(true);
  return (
    <div>
      <Component />
    </div>
  );
};
export default App;
```
