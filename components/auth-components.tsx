import { signIn, signOut } from "auth"
import { Button } from "./ui/button"

export function SignIn({
  provider,
  ...props
}: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
"use server"
        await signIn(provider)
      }}
    >
      <Button className="bg-black dark:bg-white text-white dark:text-black" {...props}>Sign In</Button>
    </form>
  )
}

export function SignOut(props: React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
      className="w-full"
    >
      <Button className="w-full p-0 bg-black dark:bg-white text-white dark:text-black" {...props}>
        Sign Out
      </Button>
    </form>
  )
}
