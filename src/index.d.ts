
import theme from 'styles/global'

// inferĂȘncia de tipos
type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
