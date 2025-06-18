# Design System Component Reference

This document provides a comprehensive overview of the design system's component architecture and available components for code generation and development reference.

## System Architecture

The design system follows a modular component-based architecture where each component group provides specific functionality. Components are organized into logical groups that can work independently or in combination with other components.

### Component Organization Principles

- **Single Responsibility**: Each component group serves a specific purpose
- **Composability**: Components can be combined to create complex interfaces
- **Consistency**: All components follow the same design patterns and API conventions
- **Accessibility**: Components are built with accessibility standards in mind

## Documentation Structure

For detailed documentation on any component group, refer to the corresponding MDX file in the `design-system-docs` folder. The documentation files follow the naming convention:

```
design-system-docs/[componentgroupname].mdx
```

For example:

- `design-system-docs/button.mdx` - Detailed documentation for Button component
- `design-system-docs/table.mdx` - Detailed documentation for Table component
- `design-system-docs/annotationcontext.mdx` - Detailed documentation for the AnnotationContext group
- `design-system-docs/applayout.mdx` - Detailed documentation for AppLayout component

These MDX files contain comprehensive information including:

- Component API documentation
- Usage examples
- Props and configuration options
- Best practices and implementation guidelines
- Accessibility requirements
- Integration patterns with other components

## Component Categories

### Layout & Structure

Components that provide foundational layout and structural elements for applications.

**Card** - Use this component group to generate card components with structured layout parts
**AspectRatio** - Use this component to generate aspect ratio containers
**Resizable** - Use this component to generate resizable panel functionality
**Separator** - Use this component to generate separator lines

### Navigation

Components for user navigation and wayfinding within applications.

**NavigationMenu** - Use this component group to generate navigation menu with required hierarchical structure
**Breadcrumb** - Use this component to generate breadcrumb navigation

### Form Controls

Interactive components for user input and data collection.

**Form** - Use this component group to generate form components with required shared context
**Button** - Use this component to generate button functionality
**Checkbox** - Use this component to generate checkbox functionality
**RadioGroup** - Use this component group to generate radio group functionality with required parent-child relationship
**Select** - Use this component to generate select dropdown functionality
**Slider** - Use this component to generate slider functionality
**Switch** - Use this component to generate switch toggle functionality
**Textarea** - Use this component to generate textarea functionality
**Calendar** - Use this component to generate calendar functionality
**Label** - Use this component to generate label functionality

### Data Display

Components for presenting and organizing data and content.

**Table** - Use this component group to generate table functionality with required hierarchical structure
**Avatar** - Use this component to generate avatar functionality
**Badge** - Use this component to generate badge functionality
**Progress** - Use this component to generate progress bar functionality

### Charts & Visualization

Components for data visualization and graphical representation.

**Chart** - Use this component group to generate chart functionality with required context and shared components

### Interactive Elements

Components for user interaction and actions.

**Accordion** - Use this component group to generate accordion functionality with required hierarchical structure
**Collapsible** - Use this component to generate collapsible functionality
**Tabs** - Use this component to generate tabs functionality
**Carousel** - Use this component group to generate carousel functionality with required context and structure

### Feedback & Communication

Components for providing feedback and communicating with users.

**Alert** - Use this component to generate alert functionality
**AlertDialog** - Use this component group to generate alert dialog functionality with required compositional structure
**Dialog** - Use this component to generate dialog functionality
**Drawer** - Use this component to generate drawer functionality
**Sheet** - Use this component to generate sheet/slide-out functionality
**Sonner** - Use this component to generate toast notifications
**Tooltip** - Use this component to generate tooltip functionality
**HoverCard** - Use this component to generate hover card functionality

### Selection & Control

Components for user selections and interface controls.

**Toggle** - Use this component to generate toggle button functionality
**ToggleGroup** - Use this component group to generate toggle group functionality with required context sharing
**Command** - Use this component to generate command palette functionality
**ContextMenu** - Use this component to generate context menu functionality
**DropdownMenu** - Use this component to generate dropdown menu functionality

### Specialized Components

Components for specific use cases and advanced functionality.

**TrackCard** - Use this component to generate music track card functionality
**MusicGenreSection** - Use this component to generate music genre section with carousel layout

## Usage Guidelines

### Component Dependencies

- Most components are self-contained and can be used independently
- **Component Groups with Multiple Parts**: Several components require multiple sub-components to work together:
  - `Accordion` group: Accordion, AccordionItem, AccordionTrigger, AccordionContent
  - `AlertDialog` group: AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel, AlertDialogPortal, AlertDialogOverlay
  - `Card` group: Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter
  - `Carousel` group: Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext
  - `Chart` group: ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, ChartStyle
  - `Form` group: Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage
  - `NavigationMenu` group: NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuContent, NavigationMenuTrigger, NavigationMenuLink, NavigationMenuIndicator, NavigationMenuViewport
  - `RadioGroup` group: RadioGroup, RadioGroupItem
  - `Table` group: Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption
  - `ToggleGroup` group: ToggleGroup, ToggleGroupItem
- Some components work better in combination (e.g., Form + FormField, Table + Pagination)

### Integration Patterns

- Layout components typically serve as containers for other components
- Form controls should be wrapped in FormField components for proper labeling
- Navigation components can be used independently or as part of larger layout structures
- Data display components can be enhanced with interactive elements like buttons and popovers
- Chart components require the ChartContainer wrapper and work with ChartTooltip and ChartLegend for enhanced functionality

### Accessibility Considerations

- All components are built with accessibility in mind
- Use semantic HTML structures provided by the components
- Leverage built-in ARIA attributes and keyboard navigation
- Form components include proper labeling and error messaging through FormLabel and FormMessage
- Dialog and AlertDialog components include proper focus management and overlay handling

### Responsive Design

- Layout components provide responsive behavior out of the box
- Card and Carousel components adapt to different screen sizes
- Mobile-friendly navigation patterns are built into navigation components
- Resizable components provide flexible layout options for different viewport sizes

### Contextual Components

Several component groups share context and state:

- **Chart components** share styling and configuration context
- **Form components** share validation and field state
- **Carousel components** share navigation state
- **ToggleGroup components** share selection state
- **NavigationMenu components** share menu state and keyboard navigation

## Usage Reference

This reference should be used to understand the available components and their intended purposes when generating code or building applications with this design system. For specific implementation details, always consult the corresponding MDX documentation file in the `design-system-docs` folder.

### Quick Reference by Use Case

**Building Forms**: Use Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage with input components like Button, Checkbox, RadioGroup, Select, Slider, Switch, Textarea

**Creating Layouts**: Use Card, AspectRatio, Resizable, Separator for structured layouts

**Adding Navigation**: Use NavigationMenu, Breadcrumb, and interactive elements like Button and DropdownMenu

**Displaying Data**: Use Table with its sub-components, or Chart components for visualizations

**User Feedback**: Use Alert, AlertDialog, Dialog, Drawer, Sheet, Sonner, Tooltip for different types of user communication

**Interactive Content**: Use Accordion, Collapsible, Tabs, Carousel for engaging user experiences

**Music Applications**: Use TrackCard and MusicGenreSection for music-specific interfaces

All components follow consistent patterns and can be composed together to create complex, accessible, and responsive user interfaces.
