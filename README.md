# Pinchos UI

A modern React component library built with TypeScript and styled-components, focusing on flexibility and reusability.

## 🚧 Development Status

This library is currently in active development and not yet ready for production use. We're working on stabilizing the API and fixing components.

## Features

- 🎨 Styled-components for dynamic and maintainable styling
- 📱 Responsive design support out of the box
- 🔧 Highly customizable components
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

## Basic Usage

```tsx
import { Button, Div, Form } from 'pinchos-ui';

function MyComponent() {
  return (
    <Div>
      <Button>Click Me</Button>
    </Div>
  );
}
```

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