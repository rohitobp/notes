import { createFileRoute } from '@tanstack/react-router'
import indexFunc from "../pages/Index"
export const Route = createFileRoute('/')({
  component: () => indexFunc(),
})