import {ShoppingCartIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

export function ButtonWithIcon() {
  return (
    <Button>
      <ShoppingCartIcon className=" h-4 w-10" />Start Shopping
    </Button>
  )
}
