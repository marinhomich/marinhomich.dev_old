import { Button } from "@marinhomich/ui/button"

export default function Home() {
  return (
    <div>
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="outline">Outline</Button>
    </div>
  )
}
