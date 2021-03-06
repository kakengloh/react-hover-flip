# react-hover-flip

`react-hover-flip` is a simple react component that will flip on hover.

[Demo](https://react-hover-flip.surge.sh)

## Installation

Using npm
```bash
npm i react-hover-flip
```

Using yarn
```bash
yarn add react-hover-flip
```


## CRA Usage

```tsx
import ReactHoverFlip from 'react-hover-flip'

const Front = <h1>Front!</h1>
const Back = <h1>Back!</h1>

<ReactHoverFlip
  front={Front}
  back={Back}
  direction="horizontal"
  height={100}
  width={100}
/>
```

## Next.js usage
```tsx
// YourComponent.tsx
import 'react-hover-flip/lib/esm/index.css' // import css
import dynamic from 'next/dynamic'

// Lazy load ReactHoverFlip as it is a pure react component 
const ReactHoverFlip = dynamic(() => import('react-hover-flip/lib/esm/index-nostyle'), { ssr: false })

const YourComponent = () => {
  const Front = <h1>Front!</h1>
  const Back = <h1>Back!</h1>

  return (
    <ReactHoverFlip
      front={Front}
      back={Back}
      direction="horizontal"
      height={100}
      width={100}
    />
  )
}
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[MIT](https://choosealicense.com/licenses/mit/)