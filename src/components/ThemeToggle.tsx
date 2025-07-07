import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/ThemeProvider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else if (theme === "dark") {
      setTheme("system")
    } else {
      setTheme("light")
    }
  }

  const getIcon = () => {
    if (theme === "light") {
      return <Sun className="h-5 w-5" />
    } else if (theme === "dark") {
      return <Moon className="h-5 w-5" />
    } else {
      // System mode - show based on current time
      const hour = new Date().getHours()
      const isDayTime = hour >= 6 && hour < 18
      return isDayTime ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />
    }
  }

  const getTooltip = () => {
    if (theme === "light") return "Switch to Dark"
    if (theme === "dark") return "Switch to Auto"
    return "Switch to Light"
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="bg-transparent border-primary/20 text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-105"
      title={getTooltip()}
    >
      {getIcon()}
    </Button>
  )
}