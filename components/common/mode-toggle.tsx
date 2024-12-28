"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const mode = ["light", "dark", "system"]

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  const renderMode = () => {
    return mode.map((item, index) => {
      return (
        <DropdownMenuItem
          key={index}
          active={theme === item}
          onClick={() => setTheme(item)}
        >
          {item}
        </DropdownMenuItem>
      )
    })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">{renderMode()}</DropdownMenuContent>
    </DropdownMenu>
  )
}
