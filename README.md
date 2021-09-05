# react-hover-flip

`react-hover-flip` is a simple react component that will flip on hover.

## Installation

Using npm
```bash
npm i react-hover-flip
```

Using yarn
```bash
yarn add react-hover-flip
```


## Usage

```typescript
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

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[MIT](https://choosealicense.com/licenses/mit/)