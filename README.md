# Pinchos UI

A modern React component library built with TypeScript and styled-components, focusing on flexibility and reusability. The key feature is prop-based styling, eliminating the need for separate CSS files.

## 🚧 Development Status

This library is currently in active development and not yet ready for production use. We're working on stabilizing the API and fixing components.

## Features

- 🎨 Prop-based styling system - no CSS files needed
- 📱 Responsive design support out of the box
- 🔧 Highly customizable components through props
- 💪 Written in TypeScript for better development experience
- ⚛️ Modern React patterns and best practices

## Component Categories

- **Content Components**: Basic building blocks (`Div`, `ResponsiveContainer`, `Separator`)
- **Interactive Components**: User interaction elements (`Button`)
- **Form Components**: Form handling components (`Form`, `FormField`)
- **Conditional Components**: Utility components for conditional rendering

## Installation

```bash
npm install pinchos-ui
```

### Peer Dependencies

This library requires the following peer dependencies:

```json
{
  "react": ">=17.0.0",
  "react-dom": ">=17.0.0",
  "react-redux": ">=8.0.0",
  "react-hook-form": ">=7.0.0",
  "styled-components": ">=5.0.0"
}
```

## Usage Examples

### Basic Div Component

The `Div` component accepts styling props for layout and appearance:

```tsx
import { Div } from 'pinchos-ui';

function MyComponent() {
  return (
    <Div
      display="flex"
      flexDirection="column"
      padding="20px"
      background="#f5f5f5"
      borderRadius="8px"
    >
      Content goes here
    </Div>
  );
}
```

### Button Component

The `Button` component combines interactive states with prop-based styling:

```tsx
import { Button } from 'pinchos-ui';

function MyComponent() {
  return (
    <Button
      padding="12px 24px"
      background="#007bff"
      color="white"
      hoverBackground="#0056b3"
      activeScale={0.98}
      onClick={() => console.log('Clicked!')}
    >
      Click Me
    </Button>
  );
}
```

These examples demonstrate how you can style components entirely through props, eliminating the need for separate CSS files or styled-components definitions.

## Development

```bash
# Install dependencies
npm install

# Start development
npm run dev

# Build the library
npm run build

# Run tests
npm test

# Lint code
npm run lint

# Format code
npm run format
```

## Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a list of changes and updates. 